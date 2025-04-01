import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/Components/Micro/Spinners/LoadingSpinner";

const Reservations = () => {
  const [reservations, setReservations] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/reservations');
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching reservations data:", error);
        setError("Failed to fetch reservations data.");
      }
    };

    fetchReservations();
  }, []);

  if (!reservations) {
    return (
        <div style={{height: "69vh"}} className='flex justify-center'>
            <LoadingSpinner speed="0.3" color="#FFA282" size="90" 
            title="Loading all reservations..." margin="8"/>
        </div>
    )  
  }

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center flex-col mt-10"> 
        <h2 className="text-4xl mb-4">All Reservations</h2>
        <Link to="/admin/dashboard" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2">Back</Link> &nbsp;
      </div>
      <div className="h-[50vh] w-9/12 my-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg h-80">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Property
                      </th>
                      <th scope="col" class="px-6 py-3">
                          User
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Email
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Check In
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Check OUt
                      </th>
                      <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                  </tr>
              </thead>
              <br />
              <tbody>
                  {reservations.map(reservation => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {reservation.property.title}
                      </th>
                      <td class="px-6 py-4">
                          {reservation.user.name}
                      </td>
                      <td class="px-6 py-4">
                          {reservation.user.email}
                      </td>
                      <td class="px-6 py-4">
                          {reservation.check_in}
                      </td>
                      <td class="px-6 py-4">
                          {reservation.check_out}
                      </td>
                      <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">More</a> &nbsp;
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

export default Reservations;