import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { AuthContext } from "@/contexts/AuthContext";
import ErrorModal from "@/Components/micro/Modals/Error/ErrorModal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errorMessage, setErrorMessage] = useState("");
  const [erroModalVisible, setErrorModalVisible] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {email, password}

    try {

      await signIn(data)
          .then(() => navigate("/"))

    } catch (error) {
      const errors = error.response.data

      // Present errors 1 by 1
      setErrorMessage(Object.values(errors)[0][0])
      setErrorModalVisible(true)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <ErrorModal errorMessage={errorMessage} visible={erroModalVisible} setVisible={setErrorModalVisible}/>
      <div className="bg-[#303030] border border-gray-300 rounded-lg p-8 shadow-xl w-full max-w-md">
        <h1 className="text-3xl text-white font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
              required
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
            <BiUser className="absolute top-4 right-4 text-gray-400" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFA282] peer"
              placeholder=" "
              required
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#FFA282] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-gray-400" />
          </div>
          <div className="flex justify-between items-center text-gray-400 text-sm mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to="/forgot-password" className="text-[#FFA282] hover:text-[#E57A5a]">Forgot Password?</Link>
          </div>
          <button className="bg-[#FFA282] w-full py-2 rounded-xl text-white font-semibold hover:bg-[#E57A5a] transition-colors">
            Login
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-400">New here? <Link className="text-[#FFA282] hover:text-[#E57A5a]" to="/register">Create an Account</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;