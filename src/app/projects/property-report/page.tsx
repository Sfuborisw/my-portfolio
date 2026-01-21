"use client";
import { useState } from "react";
import Link from "next/link";

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
  const [reports] = useState<Report[]>([
    { id: "REP-001", property: "Metrotown Centre", unit: "A102", type: "Plumbing", severity: "High", status: "Open", date: "2026-01-20" },
    { id: "REP-002", property: "Crystal Mall", unit: "B205", type: "Electrical", severity: "Medium", status: "In Progress", date: "2026-01-19" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation */}
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 mb-6 inline-block">
          ← Back to Gallery
        </Link>

        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Property Instance Reports</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Manage and track property maintenance requests.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20">
            + New Report
          </button>
        </div>

        {/* Reports Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-sm uppercase">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Property & Unit</th>
                <th className="p-4">Type</th>
                <th className="p-4">Severity</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-slate-700 text-slate-700 dark:text-slate-200">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-mono text-sm">{report.id}</td>
                  <td className="p-4">
                    <div className="font-semibold">{report.property}</div>
                    <div className="text-xs text-slate-400">Unit: {report.unit}</div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs">{report.type}</span>
                  </td>
                  <td className="p-4">
                    <span className={`text-xs font-bold ${
                      report.severity === "High" ? "text-red-500" : 
                      report.severity === "Medium" ? "text-orange-500" : "text-green-500"
                    }`}>
                      ● {report.severity}
                    </span>
                  </td>
                  <td className="p-4 text-sm">{report.status}</td>
                  <td className="p-4 text-sm text-slate-400">{report.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}