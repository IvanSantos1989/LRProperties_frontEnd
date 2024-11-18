import { useEffect, useState } from "react";
import axios from "axios";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties data:", error);
        setError("Failed to fetch properties data.");
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Properties</h2>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td className="py-2 px-4 border-b">{property.id}</td>
              <td className="py-2 px-4 border-b">{property.name}</td>
              <td className="py-2 px-4 border-b">{property.location}</td>
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

export default Properties;