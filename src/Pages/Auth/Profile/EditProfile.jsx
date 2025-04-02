import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import axios from "axios";
import LoadingSpinner from "@/Components/Micro/Spinners/LoadingSpinner";

const EditProfile = () => {
  const { token } = useContext(AuthContext);

  /*
    errors
  */
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [user, setUser] = useState({
    name: '', email: '', phone: '', country_code: '', password: '', confirmPassword: '', currentPassword: ''
  })
  
  const onChangeUserNewInfo = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const { name, email, phone, country_code } = response.data;    
        setUser(() => ({ "name": name, "email": email, "phone": phone, "country_code": country_code}))

      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [token]);
  
  const handleSubmit = async (e) => {    
    e.preventDefault();
    setError("")
    setSuccess("")

    if (user.password && user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
    } else {
      console.log(user)
      try {
          await axios.put('http://127.0.0.1:8000/api/user/update', user, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setSuccess("Changes saved successfully.");
      } catch (error) {
        setError("Failed to update profile.");
      }
    }
  };

  if (user.name == '') {
    return (
        <div style={{height: "69vh"}} className='flex justify-center'>
            <LoadingSpinner speed="0.3" color="#FFA282" size="90" 
            title="Setting everything up..." margin="8"/>
        </div>
    )  
  }

  return (
    <div className="flex justify-center items-center h-[80vh] bg-white">
      <div className="bg-[#303030] border rounded-[10px] p-8 shadow-xl max-w-md">
        <h1 className="text-3xl text-white font-bold text-center mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4 text-center">{success}</p>}
          <div className="relative my-7">
            <input
              type="text"
              value={user.name}
              onChange={onChangeUserNewInfo}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
              name="name"
              required
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
                value={user.country_code}
                onChange={onChangeUserNewInfo}
                className="block w-[50px] py-2.5 px-2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                placeholder=" "
                name="country_code"
                required
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
                required
   
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
                onChange={onChangeUserNewInfo}
                className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                placeholder=" "
                autoComplete="new-password"
                name="password"
                required
              />
              <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                New Password
              </label>
            </div>
            <div className="w-[48%]">
              <input
                type="password"
                onChange={onChangeUserNewInfo}
                className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
                placeholder=" "
                name="confirmPassword"
                required
              />
              <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm Password
              </label>
            </div>
          </div>
          <div className="relative my-7">
          <input
              type="password"
              onChange={onChangeUserNewInfo}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
              name="currentPassword"
              required
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