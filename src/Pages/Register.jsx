import { useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !countryCode || !phone || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Full Name:", fullName, "Email:", email, "Phone:", `+${countryCode} ${phone}`, "Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-[#303030] border border-gray-300 rounded-lg p-8 shadow-xl w-full max-w-md">
        <h1 className="text-3xl text-white font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="relative my-4">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Full Name
            </label>
            <BiUser className="absolute top-4 right-4 text-gray-400" />
          </div>
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
            <FaEnvelope className="absolute top-4 right-4 text-gray-400" />
          </div>
          <div className="relative my-4 flex items-center">
            <span className="absolute text-white text-sm top-3 left-3">+</span>
            <div className="flex w-full">
              <div className="relative w-1/4">
                <input
                  type="text"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="pl-8 py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-focus:left-8 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Code
                </label>
              </div>
              <div className="relative flex-1 ml-4">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
            </div>
            <FaPhoneAlt className="absolute top-4 right-4 text-gray-400" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-gray-400" />
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
            <AiOutlineUnlock className="absolute top-4 right-4 text-gray-400" />
          </div>
          <button className="bg-[#FFA282] w-full py-2 rounded-xl text-white font-semibold hover:bg-[#E57A5a] transition-colors">
            Register
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-400">Already have an account? <Link className="text-[#FFA282] hover:text-[#E57A5a]" to="/Login">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;