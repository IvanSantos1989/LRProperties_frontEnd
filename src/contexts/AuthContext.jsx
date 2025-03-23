import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
 
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  useEffect(() => {
    setToken(() => localStorage.getItem("token") || "")
  }, []);

  async function signUp(props) {
    const { name, email, phone, password } = props;
    const data = { name, email, phone, password };

    try {

      const res = await axios.post('http://127.0.0.1:8000/api/users', data);
      const token = res.data.token;

      setToken(token);
      localStorage.setItem("token", token)

    } catch (error) {
      console.error("Error during sign up:", error);
    }
  }

  async function signIn(props) {
      const { email, password } = props;

      const res = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      const token = res.data.token;

      setToken(token);
      localStorage.setItem("token", token)
  }

  function logout() {
    localStorage.removeItem("token")
    setToken("");
  }

  return (
    <AuthContext.Provider value={{token, signUp, signIn, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
