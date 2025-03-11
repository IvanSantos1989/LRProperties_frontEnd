import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: 'abc', email: 'email', phone: '123456789', countryCode: '351', newPassword: '1234', confirmNewPassword: '1234', currentPassword: '123'
  })
  const onChangeUserNewInfo = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const { name, email, phone, country_code } = response.data;
        setName(name || "");
        setEmail(email || "");
        setPhone(phone || "");
        setCountryCode(country_code || "");
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name && !email && !phone && !countryCode && !newPassword) {
      setError("No changes made.");
      setSuccess("");
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");

    try {
      await axios.put('http://127.0.0.1:8000/api/profile', { name, email, phone, country_code: countryCode, password: newPassword }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSuccess("Changes saved successfully.");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-white">
      <div className="bg-[#303030] border rounded-[10px] p-8 shadow-xl max-w-md">
        <h1 className="text-3xl text-white font-bold text-center mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <div className="relative my-7">
            <input
              type="text"
              value={user.name}
              onChange={onChangeUserNewInfo}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
              name="name"
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Full Name
            </label>
          </div>
          <div className="relative my-7">
            <input
              type="email"
              value={user.email}
              onChange={onChangeUserNewInfo}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
              name="email"
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          <div className="flex gap-2 my-7">
            <div className="relative flex items-center">
              <span className="text-white text-sm font-semibold">+</span>
              <input
                type="text"
                value={user.countryCode}
                onChange={onChangeUserNewInfo}
                className="block w-[50px] py-2.5 px-2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                placeholder=" "
                name="countryCode"
              />
              <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-3 peer-focus:scale-75 peer-focus:-translate-y-6">
                Code
              </label>
            </div>
            <div className="relative flex-grow">
              <input
                type="tel"
                value={user.phone}
                onChange={onChangeUserNewInfo}
                className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                placeholder=" "
                name="phone"
              />
              <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone
              </label>
            </div>
          </div>
          <div className="relative my-7 flex justify-between">
            <div className="w-[48%]">
              <input
                type="password"
                value={user.newPassword}
                onChange={onChangeUserNewInfo}
                className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                placeholder=" "
                autoComplete="new-password"
                name="newPassword"
              />
              <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                New Password
              </label>
            </div>
            <div className="w-[48%]">
              <input
                type="password"
                value={user.confirmNewPassword}
                onChange={onChangeUserNewInfo}
                className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                placeholder=" "
                name="confirmNewPassword"
              />
              <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm Password
              </label>
            </div>
          </div>
          <div className="relative my-7">
          <input
              type="password"
              value={user.currentPassword}
              onChange={onChangeUserNewInfo}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
              name="currentPassword"
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Current Password
            </label>
          </div>
          <button className="bg-[#FFA282] w-full py-2 rounded-xl text-white font-semibold hover:bg-[#E57A5a] transition-colors">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;