import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { motion, AnimatePresence } from "framer-motion";

export default function MockDashboard() {
  const takeoffData = [
    { week: "Oct 14", takeoffs: 18 },
    { week: "Oct 21", takeoffs: 26 },
    { week: "Oct 28", takeoffs: 33 },
    { week: "Nov 4", takeoffs: 45 },
  ];

  const tradeVolume = [
    { trade: "Paint", qty: 1250 },
    { trade: "Flooring", qty: 960 },
    { trade: "Cabinetry", qty: 780 },
    { trade: "Countertops", qty: 610 },
    { trade: "Roofing", qty: 300 },
  ];

  const projectPerformance = [
    { project: "CushWake - Stonebridge", budget: 120000, actual: 128000 },
    { project: "Willow Bridge - Briscoe", budget: 87000, actual: 84500 },
    { project: "Jes Stone - Vendor Ops", budget: 56000, actual: 57500 },
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-gray-100 font-[Century-Gothic] overflow-x-hidden relative">
      <h1 className="text-4xl font-semibold text-center text-pink-300 mb-6">
        DFW Smart Apartments — Field Operations Overview
      </h1>
      {/* KPI, Charts, and Placeholder sections */}
    </div>
  );
}