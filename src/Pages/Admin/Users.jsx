import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "@/Components/micro/LoadingSpinner";

const Users = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users data.");
      }
    };

    fetchUsers();
  }, []); 


  if (!users) {
    return (
        <div style={{height: "69vh"}} className='flex justify-center'>
            <LoadingSpinner speed="0.3" color="#FFA282" size="90" 
            title="Loading all users..." margin="8"/>
        </div>
    )  
  }

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center flex-col mt-10"> 
        <h2 className="text-4xl mb-4">All Users</h2>
        <Link to="/admin/dashboard" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2">Back</Link> &nbsp;
      </div>
      <div className="h-[50vh] w-9/12 my-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-80">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {users.map(user => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {user.name}
                      </th>
                      <td className="px-6 py-4">
                          {user.email}
                      </td>
                      <td className="px-6 py-4">
                          {user.phone}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> &nbsp;
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                      </td>
                    </tr>              
                  ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;