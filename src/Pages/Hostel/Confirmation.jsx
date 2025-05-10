import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Dados enviados da página anterior
  const { hostel, totalPrice, startDate, endDate, pets, adults } = location.state || {};

  const handleEdit = () => {
    navigate(-1); // Volta para a página anterior
  };

  const handleConfirm = () => {
    // Redireciona para a página de pagamento
    navigate("/payment", { state: { hostel, totalPrice, startDate, endDate, pets, adults } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
      {hostel ? (
        <div>
          <p className="mb-2">
            <strong>Hostel:</strong> {hostel.title}
          </p>
          <p className="mb-2">
            <strong>Check-in:</strong> {startDate ? new Date(startDate).toLocaleDateString() : "N/A"}
          </p>
          <p className="mb-2">
            <strong>Check-out:</strong> {endDate ? new Date(endDate).toLocaleDateString() : "N/A"}
          </p>
          <p className="mb-2">
            <strong>Guests:</strong> {adults} Adults, {pets} Pets
          </p>
          <p className="mb-4">
            <strong>Total Price:</strong> {totalPrice}€
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleEdit}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              Back to Edit
            </button>
            <button
              onClick={handleConfirm}
              className="bg-[#FF9874] hover:bg-[#E57A5a] text-white font-bold py-2 px-4 rounded"
            >
              Confirm Details
            </button>
          </div>
        </div>
      ) : (
        <p className="text-red-500">No booking details available.</p>
      )}
    </div>
  );
};

export default Confirmation;