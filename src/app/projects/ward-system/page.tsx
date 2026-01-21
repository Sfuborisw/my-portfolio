"use client";
import { useState } from "react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Patient data definition
interface Patient {
  id: number;
  name: string;
  age: number;
  bed: string;
  lastMeal: string;
  status: "Stable" | "Critical" | "Under Observation";
  heartRateHistory: { time: string; bpm: number }[];
  tempHistory: { time: string; temp: number }[];
}

export default function WardSystemPage() {
  // Mock data for 6 beds
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 1,
      name: "John Doe",
      age: 65,
      bed: "A-01",
      lastMeal: "12:30 PM",
      status: "Stable",
      heartRateHistory: [
        { time: "08:00", bpm: 72 },
        { time: "10:00", bpm: 75 },
        { time: "12:00", bpm: 80 },
        { time: "14:00", bpm: 78 },
      ],
      tempHistory: [
        { time: "08:00", temp: 36.5 },
        { time: "10:00", temp: 36.7 },
        { time: "12:00", temp: 36.8 },
        { time: "14:00", temp: 37.0 },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 42,
      bed: "A-02",
      lastMeal: "08:00 AM",
      status: "Under Observation",
      heartRateHistory: [
        { time: "08:00", bpm: 95 },
        { time: "10:00", bpm: 110 },
        { time: "12:00", bpm: 105 },
        { time: "14:00", bpm: 98 },
      ],
      tempHistory: [
        { time: "08:00", temp: 38.2 },
        { time: "10:00", temp: 38.5 },
        { time: "12:00", temp: 38.0 },
        { time: "14:00", temp: 37.8 },
      ],
    },
  ]);

  const [selectedPatient, setSelectedPatient] = useState<Patient>(patients[0]);
  const [newBpm, setNewBpm] = useState("");
  const [newMeal, setNewMeal] = useState("");
  const [activeTab, setActiveTab] = useState<"BPM" | "TEMP">("BPM");

  // --- Submit Data Logic ---
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const updatedPatients = patients.map((p) => {
      if (p.id === selectedPatient.id) {
        let updatedHeartRate = p.heartRateHistory;
        let updatedTemp = p.tempHistory;

        // Determine update content based on current tab
        if (activeTab === "BPM" && newBpm) {
          updatedHeartRate = [
            ...p.heartRateHistory,
            { time: currentTime, bpm: parseInt(newBpm) },
          ];
        } else if (activeTab === "TEMP" && newBpm) {
          // Using the same input here, or you can rename it to newValue
          updatedTemp = [
            ...p.tempHistory,
            { time: currentTime, temp: parseFloat(newBpm) },
          ];
        }

        return {
          ...p,
          lastMeal: newMeal || p.lastMeal,
          heartRateHistory: updatedHeartRate,
          tempHistory: updatedTemp,
        };
      }
      return p;
    });

    setPatients(updatedPatients);

    // Update current selected patient view (trigger Chart re-render)
    const updatedSelected = updatedPatients.find(
      (p) => p.id === selectedPatient.id,
    );
    if (updatedSelected) setSelectedPatient(updatedSelected);

    // Clear input
    setNewBpm("");
    setNewMeal("");
  };

  // --- Modal Status ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPatientData, setNewPatientData] = useState({
    name: "",
    age: "",
    bed: "",
  });

  // --- Admit Patient Logic ---
  const handleAdmitPatient = (e: React.FormEvent) => {
    e.preventDefault();

    if (patients.length >= 6) {
      alert("Ward is full! (Max 6 patients)");
      return;
    }

    const newPatient: Patient = {
      id: Date.now(), // Ensure ID is unique
      name: newPatientData.name,
      age: parseInt(newPatientData.age),
      bed: newPatientData.bed || `A-0${patients.length + 1}`,
      lastMeal: "Not recorded",
      status: "Under Observation",
      heartRateHistory: [{ time: "Current", bpm: 75 }], // Initial data
      tempHistory: [{ time: "Current", temp: 36.5 }],
    };

    setPatients([...patients, newPatient]);
    setIsModalOpen(false);
    setNewPatientData({ name: "", age: "", bed: "" });
  };

  // --- Discharge (Delete) Logic ---
  const handleDischarge = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent triggering onClick event of selected patient

    if (window.confirm("Are you sure you want to discharge this patient?")) {
      const updatedPatients = patients.filter((p) => p.id !== id);
      setPatients(updatedPatients);

      // If the discharged patient is currently selected, switch to the first patient or clear
      if (selectedPatient.id === id && updatedPatients.length > 0) {
        setSelectedPatient(updatedPatients[0]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 pt-24 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/projects"
          className="text-emerald-600 dark:text-emerald-400 mb-6 inline-block font-medium"
        >
          ← Back to Station
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: 6 Bed Cards (Ward Overview) */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold dark:text-white">
                Ward A - Bed Monitoring
              </h2>
              {patients.length < 6 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all"
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
                  className={`p-4 rounded-2xl cursor-pointer border-2 transition-all relative group ${
                    selectedPatient.id === p.id
                      ? "border-emerald-500 bg-white dark:bg-slate-800 shadow-md"
                      : "border-transparent bg-slate-200/50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800"
                  }`}
                >
                  {/* Discharge Button - Only visible on Hover */}
                  <button
                    onClick={(e) => handleDischarge(e, p.id)}
                    className="absolute top-2 right-2 text-slate-400 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Discharge Patient"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>

                  <div className="text-xs font-mono text-slate-500 mb-1">
                    {p.bed}
                  </div>
                  <div className="font-bold dark:text-white truncate pr-4">
                    {p.name}
                  </div>
                  <div
                    className={`text-[10px] mt-2 font-bold px-2 py-0.5 rounded-full inline-block ${
                      p.status === "Stable"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {p.status}
                  </div>
                </div>
              ))}
              {patients.length < 6 && (
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-dashed border-slate-300 dark:border-slate-700 p-4 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-all cursor-pointer h-[100px]"
                >
                  <span className="text-xl">+</span>
                  <span className="text-[10px] font-bold uppercase">
                    Empty Bed
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Patient Detail Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* --- Multi-Function Monitoring Panel (Multi-Chart Panel) --- */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border dark:border-slate-700">
              {/* Tab Switcher */}
              <div className="flex gap-2 mb-8 bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl w-fit">
                <button
                  onClick={() => setActiveTab("BPM")}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === "BPM"
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  Heart Rate (BPM)
                </button>
                <button
                  onClick={() => setActiveTab("TEMP")}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === "TEMP"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  Temperature (°C)
                </button>
              </div>

              {/* Dynamic Chart Area */}
              <div className="h-72 w-full">
                <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">
                  {activeTab === "BPM"
                    ? "Heart Rate Trend (BPM)"
                    : "Body Temperature Trend (°C)"}
                </h4>

                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={
                      activeTab === "BPM"
                        ? selectedPatient.heartRateHistory
                        : selectedPatient.tempHistory
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
                      domain={activeTab === "BPM" ? [40, 160] : [35, 42]} // Smaller range for temperature
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
                      activeDot={{ r: 8 }}
                      animationDuration={1000}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Vitals Entry */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border-l-4 border-emerald-500">
          <h4 className="text-sm font-bold text-slate-400 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            RECORD {activeTab} {/* Display current entry type */}
          </h4>
          <div className="flex gap-3">
            <input
              type="number"
              step={activeTab === "TEMP" ? "0.1" : "1"} // Temperature supports decimals
              value={newBpm}
              onChange={(e) => setNewBpm(e.target.value)}
              placeholder={activeTab === "BPM" ? "HR (BPM)" : "Temp (°C)"}
              className="flex-1 bg-slate-50 dark:bg-slate-900 border dark:border-slate-600 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={handleUpdate}
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all"
            >
              Save
            </button>
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
          <div className="relative bg-white dark:bg-slate-800 w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in zoom-in duration-200">
            <h2 className="text-2xl font-bold dark:text-white mb-6">
              Admit New Patient
            </h2>
            <form onSubmit={handleAdmitPatient} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-900 border dark:border-slate-700 p-3 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  value={newPatientData.name}
                  onChange={(e) =>
                    setNewPatientData({
                      ...newPatientData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">
                    Age
                  </label>
                  <input
                    required
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-900 border dark:border-slate-700 p-3 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newPatientData.age}
                    onChange={(e) =>
                      setNewPatientData({
                        ...newPatientData,
                        age: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">
                    Bed No.
                  </label>
                  <input
                    placeholder="e.g. A-03"
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-900 border dark:border-slate-700 p-3 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newPatientData.bed}
                    onChange={(e) =>
                      setNewPatientData({
                        ...newPatientData,
                        bed: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 p-3 text-slate-500 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white p-3 rounded-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-500/20"
                >
                  Admit Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
