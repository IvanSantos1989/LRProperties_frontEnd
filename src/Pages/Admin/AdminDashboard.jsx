import { Link, Route, Routes } from "react-router-dom";
import Properties from "./Properties";
import Reservations from "./Reservations";
import Users from "./Users";
import Statistics from "./Statistics";
import Settings from "./Settings";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ properties: 0, reservations: 0, users: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/stats');
        setStats(response.data);
      } catch (error) {
        console.error("Failed to load statistics data:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex">
      <nav className="w-1/4 bg-gray-800 text-white p-4">
        <ul>
          <li className="mb-2">
            <Link to="/admin/dashboard/properties" className="hover:underline">Properties</Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/dashboard/reservations" className="hover:underline">Reservations</Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/dashboard/users" className="hover:underline">Users</Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/dashboard/statistics" className="hover:underline">Statistics</Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/dashboard/settings" className="hover:underline">Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 p-4">
        <h1 className="text-3xl mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Properties</h2>
            <p className="text-2xl">{stats.properties}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Reservations</h2>
            <p className="text-2xl">{stats.reservations}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Users</h2>
            <p className="text-2xl">{stats.users}</p>
          </div>
        </div>
        <Routes>
          <Route path="properties" element={<Properties />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="users" element={<Users />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;