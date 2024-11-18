import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/password-reset", { email });
      console.log("Response:", response.data);
      setSuccess("A password reset link has been sent to your email.");
      setError("");
    } catch (error) {
      console.error("Error sending reset email:", error);
      setError("Failed to send reset email. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-[#303030] border border-gray-300 rounded-lg p-8 shadow-xl w-full max-w-md">
        <h1 className="text-3xl text-white font-bold text-center mb-6">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <div className="relative my-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          <button className="bg-[#FFA282] w-full py-2 rounded-xl text-white font-semibold hover:bg-[#E57A5a] transition-colors">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;