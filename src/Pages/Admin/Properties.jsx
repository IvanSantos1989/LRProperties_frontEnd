import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "@/Components/micro/Spinners/LoadingSpinner";
import { Link } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/houses');
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties data:", error);
        setError("Failed to fetch properties data.");
      }
    };

    fetchProperties();
  }, []);


  if (!properties) {
    return (
        <div style={{height: "69vh"}} className='flex justify-center'>
            <LoadingSpinner speed="0.3" color="#FFA282" size="90" 
            title="Loading your properties..." margin="8"/>
        </div>
    )  
}


  return (
<div className="flex justify-center items-center flex-col ">
  <div className="flex justify-center items-center flex-col mt-10"> 
    <h2 className="text-4xl mb-4">Properties</h2>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-9/12">
      ADD HOUSE
    </button>
    <Link to="/admin/dashboard" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2">Back</Link> &nbsp;
  </div>
  <div className="h-[50vh] w-9/12 my-10">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Propety Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Location
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Registration Number
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price (per night)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
              </tr>
          </thead>
          <br />
          <tbody>
              {properties.map(property => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {property.title}
                  </th>
                  <td class="px-6 py-4">
                      {property.location}
                  </td>
                  <td class="px-6 py-4">
                      {property.accommodation_reg_number}
                  </td>
                  <td class="px-6 py-4">
                      €{property.price_per_night}
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> &nbsp;
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
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

export default Properties;