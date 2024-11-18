import { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [stats, setStats] = useState({ properties: 0, reservations: 0, users: 0 });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/stats');
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching statistics data:", error);
        setError("Failed to fetch statistics data.");
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Statistics</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl">Properties</h3>
          <p className="text-2xl">{stats.properties}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl">Reservations</h3>
          <p className="text-2xl">{stats.reservations}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl">Users</h3>
          <p className="text-2xl">{stats.users}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;