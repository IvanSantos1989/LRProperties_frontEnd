import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/Components/Admin/Sidebar";

const Dashboard = () => {
  const [stats, setStats] = useState({});

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
      <Sidebar />
      <div className="w-3/4 p-4 h-dvh">
        <h1 className="text-3xl my-8 ">Admin Dashboard</h1>
        <div className="grid gap-20 mb-8 ">
          <div className="bg-white p-7 rounded shadow">
            <h2 className="text-xl">Properties</h2>
            <p className="text-2xl">{stats.properties}</p>
          </div>
          <div className="bg-white p-7 rounded shadow">
            <h2 className="text-xl">Reservations</h2>
            <p className="text-2xl">{stats.reservations}</p>
          </div>
          <div className="bg-white p-7 rounded shadow">
            <h2 className="text-xl">Users</h2>
            <p className="text-2xl">{stats.users}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;