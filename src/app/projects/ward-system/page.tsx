"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Patient {
  id: string;
  name: string;
  age: number;
  bed: string;
  last_meal: string;
  status: string;
  heart_rate_history: { time: string; bpm: number }[];
  temp_history: { time: string; temp: number }[];
}

export default function WardSystemPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [newBpm, setNewBpm] = useState("");
  const [activeTab, setActiveTab] = useState<"BPM" | "TEMP">("BPM");
  const [isLoading, setIsLoading] = useState(true);

  // --- Fetch Data from Supabase ---
  useEffect(() => {
    const fetchPatients = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("ward_patients")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Fetch error:", error);
      } else if (data) {
        setPatients(data);
        if (data.length > 0) setSelectedPatient(data[0]);
      }
      setIsLoading(false);
    };
    fetchPatients();
  }, []);

  // --- Submit Data Logic ---
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatient || !newBpm) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const updatedHR = [...selectedPatient.heart_rate_history];
    const updatedTemp = [...selectedPatient.temp_history];

    if (activeTab === "BPM") {
      updatedHR.push({ time: currentTime, bpm: parseInt(newBpm) });
    } else {
      updatedTemp.push({ time: currentTime, temp: parseFloat(newBpm) });
    }

    const { error } = await supabase
      .from("ward_patients")
      .update({
        heart_rate_history: updatedHR,
        temp_history: updatedTemp,
      })
      .eq("id", selectedPatient.id);

    if (!error) {
      const updatedList = patients.map((p) =>
        p.id === selectedPatient.id
          ? { ...p, heart_rate_history: updatedHR, temp_history: updatedTemp }
          : p,
      );
      setPatients(updatedList);
      setSelectedPatient(
        updatedList.find((p) => p.id === selectedPatient.id) || null,
      );
      setNewBpm("");
    }
  };

  // --- Admit Patient Logic ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPatientData, setNewPatientData] = useState({
    name: "",
    age: "",
    bed: "",
  });

  const handleAdmitPatient = async (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord = {
      name: newPatientData.name,
      age: parseInt(newPatientData.age),
      bed: newPatientData.bed || `A-0${patients.length + 1}`,
      last_meal: "Not recorded",
      status: "Under Observation",
      heart_rate_history: [{ time: "Current", bpm: 75 }],
      temp_history: [{ time: "Current", temp: 36.5 }],
    };

    const { data, error } = await supabase
      .from("ward_patients")
      .insert([newRecord])
      .select();

    if (data) {
      setPatients([...patients, data[0]]);
      if (!selectedPatient) setSelectedPatient(data[0]);
      setIsModalOpen(false);
      setNewPatientData({ name: "", age: "", bed: "" });
    }
  };

  // --- Discharge Logic ---
  const handleDischarge = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm("Discharge this patient?")) {
      const { error } = await supabase
        .from("ward_patients")
        .delete()
        .eq("id", id);
      if (!error) {
        const remaining = patients.filter((p) => p.id !== id);
        setPatients(remaining);
        if (selectedPatient?.id === id)
          setSelectedPatient(remaining.length > 0 ? remaining[0] : null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 pt-24 pb-12 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Navigation */}
        <Link
          href="/projects"
          className="text-emerald-600 dark:text-emerald-400 mb-6 inline-block font-medium hover:underline"
        >
          ← Back to Gallery
        </Link>

        {/* Main Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Ward Patient Chart System
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Medical monitoring dashboard for tracking real-time patient vitals.
          </p>
        </div>

        {/* --- Engineering Architecture Brief & Instructions --- */}
        <div className="mb-10 p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl flex flex-col md:flex-row gap-8 backdrop-blur-sm">
          {/* Left: Description */}
          <div className="flex-1">
            <h3 className="text-[11px] font-black text-emerald-500 tracking-[0.2em] uppercase mb-3">
              System Architecture & Data Visualization
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-medium mb-5">
              This medical monitoring dashboard integrates a{" "}
              <strong className="text-white">Supabase PostgreSQL</strong>{" "}
              backend with advanced frontend data visualization. It utilizes{" "}
              <strong className="text-white">Recharts</strong> to render
              dynamic, interactive arrays of patient vitals (BPM & Temperature)
              while ensuring seamless CRUD operations for ward admissions and
              discharges.
            </p>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-950 text-slate-300 text-[10px] font-bold tracking-widest uppercase rounded border border-slate-800">
                Supabase
              </span>
              <span className="px-2 py-1 bg-slate-950 text-slate-300 text-[10px] font-bold tracking-widest uppercase rounded border border-slate-800">
                Recharts
              </span>
              <span className="px-2 py-1 bg-slate-950 text-slate-300 text-[10px] font-bold tracking-widest uppercase rounded border border-slate-800">
                Data Analytics
              </span>
            </div>
          </div>

          {/* Right: Interactive Demo Guide */}
          <div className="w-full md:w-5/12 bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-[11px] font-black text-blue-400 tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Interactive Demo Guide
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                  1
                </span>
                <p className="leading-relaxed">
                  <strong>Admit & Discharge:</strong> Click the{" "}
                  <span className="text-blue-400 font-bold">+</span> icon to
                  admit a patient. Hover over a patient card and click &times;
                  to discharge.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                  2
                </span>
                <p className="leading-relaxed">
                  <strong>Analyze Vitals:</strong> Select a patient card to load
                  their historical heart rate and temperature data onto the
                  interactive chart.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                  3
                </span>
                <p className="leading-relaxed">
                  <strong>Live Updates:</strong> Input new vitals and click{" "}
                  <span className="text-blue-400 font-bold">Save</span>. The
                  chart and database will update instantly in real-time.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* The Rest of the UI (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold dark:text-white">
                Ward A - Bed Monitoring
              </h2>
              {patients.length < 6 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-8 h-8 rounded-full flex items-center shadow-lg justify-center"
                >
                  +
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {patients.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedPatient(p)}
                  className={`p-4 rounded-2xl cursor-pointer border-2 transition-all relative group ${selectedPatient?.id === p.id ? "border-emerald-500 bg-white dark:bg-slate-800 shadow-md" : "border-transparent bg-slate-200/50 dark:bg-slate-900"}`}
                >
                  <button
                    onClick={(e) => handleDischarge(e, p.id)}
                    className="absolute top-2 right-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100"
                  >
                    ×
                  </button>
                  <div className="text-xs font-mono text-slate-500 mb-1">
                    {p.bed}
                  </div>
                  <div className="font-bold dark:text-white truncate">
                    {p.name}
                  </div>
                  <div className="text-[10px] mt-2 font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 inline-block">
                    {p.status}
                  </div>
                </div>
              ))}
              {patients.length < 6 && (
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-dashed border-slate-300 dark:border-slate-700 p-4 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-emerald-500 cursor-pointer h-[100px]"
                >
                  + Empty
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Chart */}
          <div className="lg:col-span-2">
            {selectedPatient ? (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border dark:border-slate-700">
                  <div className="flex gap-2 mb-8 bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl w-fit">
                    <button
                      onClick={() => setActiveTab("BPM")}
                      className={`px-6 py-2 rounded-xl text-sm font-bold ${activeTab === "BPM" ? "bg-emerald-600 text-white shadow-lg" : "text-slate-500"}`}
                    >
                      BPM
                    </button>
                    <button
                      onClick={() => setActiveTab("TEMP")}
                      className={`px-6 py-2 rounded-xl text-sm font-bold ${activeTab === "TEMP" ? "bg-blue-600 text-white shadow-lg" : "text-slate-500"}`}
                    >
                      Temp
                    </button>
                  </div>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={
                          activeTab === "BPM"
                            ? selectedPatient.heart_rate_history
                            : selectedPatient.temp_history
                        }
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#334155"
                          opacity={0.1}
                        />
                        <XAxis
                          dataKey="time"
                          stroke="#94a3b8"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          stroke="#94a3b8"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          domain={activeTab === "BPM" ? [40, 160] : [35, 42]}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1e293b",
                            border: "none",
                            borderRadius: "12px",
                            color: "#fff",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey={activeTab === "BPM" ? "bpm" : "temp"}
                          stroke={activeTab === "BPM" ? "#10b981" : "#3b82f6"}
                          strokeWidth={4}
                          dot={{ r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Save Input */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border-l-4 border-emerald-500">
                  <div className="flex gap-3">
                    <input
                      type="number"
                      step={activeTab === "TEMP" ? "0.1" : "1"}
                      value={newBpm}
                      onChange={(e) => setNewBpm(e.target.value)}
                      placeholder={
                        activeTab === "BPM" ? "HR (BPM)" : "Temp (°C)"
                      }
                      className="flex-1 bg-slate-50 dark:bg-slate-900 border dark:border-slate-600 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    />
                    <button
                      onClick={handleUpdate}
                      className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-slate-500 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
                {isLoading ? "Loading Database..." : "No Patient Selected"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Admit Patient Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-white dark:bg-slate-800 w-full max-w-md rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold dark:text-white mb-6">
              Admit New Patient
            </h2>
            <form onSubmit={handleAdmitPatient} className="space-y-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-50 dark:bg-slate-900 border p-3 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                value={newPatientData.name}
                onChange={(e) =>
                  setNewPatientData({ ...newPatientData, name: e.target.value })
                }
              />
              <input
                required
                type="number"
                placeholder="Age"
                className="w-full bg-slate-50 dark:bg-slate-900 border p-3 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                value={newPatientData.age}
                onChange={(e) =>
                  setNewPatientData({ ...newPatientData, age: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Bed No."
                className="w-full bg-slate-50 dark:bg-slate-900 border p-3 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                value={newPatientData.bed}
                onChange={(e) =>
                  setNewPatientData({ ...newPatientData, bed: e.target.value })
                }
              />
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 text-slate-500 font-bold hover:bg-slate-100 dark:hover:bg-slate-700 py-3 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white p-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  Admit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
