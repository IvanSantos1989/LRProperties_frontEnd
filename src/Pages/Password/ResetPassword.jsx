import { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    try {
      const token = new URLSearchParams(window.location.search).get("token");

      const response = await axios.post("http://127.0.0.1:8000/api/password-reset/confirm", {
        token,
        password: newPassword,
      });
      console.log("Response:", response.data);
      setSuccess("Password reset successfully.");
      setError("");
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Failed to reset password. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-[#303030] border border-gray-300 rounded-lg p-8 shadow-xl w-full max-w-md">
        <h1 className="text-3xl text-white font-bold text-center mb-6">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <div className="relative my-4">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              New Password
            </label>
          </div>
          <div className="relative my-4">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Confirm Password
            </label>
          </div>
          <button className="bg-[#FFA282] w-full py-2 rounded-xl text-white font-semibold hover:bg-[#E57A5a] transition-colors">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;