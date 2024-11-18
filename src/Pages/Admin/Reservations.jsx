import { useEffect, useState } from "react";
import axios from "axios";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/reservations');
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching reservations data:", error);
        setError("Failed to fetch reservations data.");
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Reservations</h2>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Property</th>
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td className="py-2 px-4 border-b">{reservation.id}</td>
              <td className="py-2 px-4 border-b">{reservation.property_name}</td>
              <td className="py-2 px-4 border-b">{reservation.user_name}</td>
              <td className="py-2 px-4 border-b">{reservation.date}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;