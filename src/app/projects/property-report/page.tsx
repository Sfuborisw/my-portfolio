"use client";
import { useState, useEffect } from "react"; // 記得加 useEffect
import Link from "next/link";
import { supabase } from "@/lib/supabase"; // 確保你有呢行

interface Report {
  id: string;
  property: string;
  unit: string;
  type: string;
  severity: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Resolved";
  date: string;
}

export default function PropertyReportPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReport, setNewReport] = useState({
    property: "",
    unit: "",
    type: "Plumbing",
    severity: "Low" as "Low" | "Medium" | "High",
  });

  // 1. 從 Supabase 讀取資料
  useEffect(() => {
    const fetchReports = async () => {
      const { data, error } = await supabase
        .from('property_reports')
        .select('*')
        .order('date', { ascending: false });

      if (data) setReports(data as Report[]);
      if (error) console.error("Error fetching:", error);
    };
    fetchReports();
  }, []);

  // 2. 新增 Report 到 Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 準備要插入 Database 嘅資料（唔好手動整 ID，等 DB 自己生）
    const reportToInsert = {
      property: newReport.property,
      unit: newReport.unit,
      type: newReport.type,
      severity: newReport.severity,
      status: "Open",
      // date 會由 DB default 生成
    };

    const { data, error } = await supabase
      .from('property_reports')
      .insert([reportToInsert])
      .select();

    if (data) {
      setReports([data[0] as Report, ...reports]); // 更新 UI
      setIsModalOpen(false);
      setNewReport({ property: "", unit: "", type: "Plumbing", severity: "Low" });
    }
    if (error) alert("Error creating report: " + error.message);
  };

  // 3. 更新狀態 (Supabase Update)
  const toggleStatus = async (id: string) => {
    const statusOrder: Report["status"][] = ["Open", "In Progress", "Resolved"];
    const currentReport = reports.find(r => r.id === id);
    if (!currentReport) return;

    const nextIndex = (statusOrder.indexOf(currentReport.status) + 1) % statusOrder.length;
    const nextStatus = statusOrder[nextIndex];

    const { error } = await supabase
      .from('property_reports')
      .update({ status: nextStatus })
      .eq('id', id);

    if (!error) {
      setReports(reports.map(r => r.id === id ? { ...r, status: nextStatus } : r));
    }
  };

  // 4. 刪除 Report (Supabase Delete)
  const deleteReport = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      const { error } = await supabase
        .from('property_reports')
        .delete()
        .eq('id', id);

      if (!error) {
        setReports(reports.filter(report => report.id !== id));
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-12 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 mb-6 inline-block hover:underline">
          ← Back to Gallery
        </Link>

        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Property Instance Reports</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Manage and track property maintenance requests.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30"
          >
            + New Report
          </button>
        </div>

        {/* Table section remains unchanged... */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-sm uppercase">
              <tr>
                <th className="p-4 w-40">ID</th>
                <th className="p-4 w-40">Property & Unit</th>
                <th className="p-4 w-40">Type</th>
                <th className="p-4 w-40">Severity</th>
                <th className="p-4 w-40">Status</th>
                <th className="p-4 w-40">Date</th>
                <th className="p-4 w-40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-slate-700 text-slate-700 dark:text-slate-200">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 w-40 font-mono text-sm">{report.id.substring(0, 8)}</td>
                  <td className="p-4 w-40">
                    <div className="font-semibold">{report.property}</div>
                    <div className="text-xs text-slate-400">Unit: {report.unit}</div>
                  </td>
                  <td className="p-4 w-40 text-sm">{report.type}</td>
                  <td className="p-4 w-40">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      report.severity === "High" ? "bg-red-100 text-red-600" : 
                      report.severity === "Medium" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"
                    }`}>
                      {report.severity}
                    </span>
                  </td>
                  <td className="p-4 w-40 text-sm">
                    {/* Add button to toggle Status */}
                    <button 
                    onClick={() => toggleStatus(report.id)}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                    <span className={`w-2 h-2 rounded-full ${report.status === "Open" ? "bg-blue-500" : report.status === "In Progress" ? "bg-orange-500" : "bg-green-500"}`}></span>
                    {report.status}
                    </button>
                  </td>
                  <td className="p-4 w-40 text-sm text-slate-400">{report.date}</td>
                  <td className="p-4 w-40 text-right">
                    <button 
                      onClick={() => deleteReport(report.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors"
                      title="Delete Report"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {reports.length === 0 && (
            <div className="p-12 text-center text-slate-500">
              No reports found. Click &quot;+ New Report&quot; to add one.
            </div>
          )}
        </div>
      </div>

      {/* --- MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white dark:bg-slate-800 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Create New Report</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Property Name</label>
                  <input 
                    required
                    type="text"
                    className="w-full px-4 py-2 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={newReport.property}
                    onChange={(e) => setNewReport({...newReport, property: e.target.value})}
                    placeholder="e.g. Metrotown Tower A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Unit Number</label>
                  <input 
                    required
                    type="text"
                    className="w-full px-4 py-2 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={newReport.unit}
                    onChange={(e) => setNewReport({...newReport, unit: e.target.value})}
                    placeholder="e.g. 1205"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Issue Type</label>
                    <select 
                      className="w-full px-4 py-2 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none"
                      value={newReport.type}
                      onChange={(e) => setNewReport({...newReport, type: e.target.value})}
                    >
                      <option>Plumbing</option>
                      <option>Electrical</option>
                      <option>Security</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Severity</label>
                    <select 
                      className="w-full px-4 py-2 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none"
                      value={newReport.severity}
                      onChange={(e) => setNewReport({...newReport, severity: e.target.value as any})}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-6">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}