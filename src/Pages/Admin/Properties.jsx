import { useState } from "react";
import Modal from "@/Components/micro/Modal";
import { Link } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = useState([
    {
      title: "Exemplo 1",
      price: 120,
      bedrooms: 3,
      beds: 4,
      guests: 6,
      bathrooms: 2,
      accommodation_reg_number: "123456-AB",
      location: "Clerigos",
      description: "A cozy house perfect for a family vacation.",
    },
    {
      title: "Exemplo 2",
      price: 90,
      bedrooms: 2,
      beds: 3,
      guests: 4,
      bathrooms: 1,
      accommodation_reg_number: "654321-CD",
      location: "Porto",
      description: "A cozy house in the heart of Porto.",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [propertyForm, setPropertyForm] = useState({
    title: "",
    price: "",
    bedrooms: "",
    beds: "",
    guests: "",
    bathrooms: "",
    accommodation_reg_number: "",
    location: "",
    description: "",
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSaveProperty = () => {
    if (editIndex !== null) {
      const updatedProperties = [...properties];
      updatedProperties[editIndex] = { ...propertyForm };
      setProperties(updatedProperties);
      setEditIndex(null);
    } else {
      setProperties((prev) => [...prev, { ...propertyForm }]);
    }

    setPropertyForm({
      title: "",
      price: "",
      bedrooms: "",
      beds: "",
      guests: "",
      bathrooms: "",
      accommodation_reg_number: "",
      location: "",
      description: "",
    });
    setModalOpen(false);
  };


  const handleEditProperty = (index) => {
    setEditIndex(index);
    setPropertyForm({ ...properties[index] });
    setModalOpen(true);
  };

  
  const handleDeleteProperty = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

  
  const handleImageUpload = () => {
    console.log("Upload images clicked");
    
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col mt-10">
        <h2 className="text-4xl mb-4">Properties</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#FFA282] hover:bg-[#E57A5a] text-white font-bold py-2 px-4 rounded w-9/12"
        >
          ADD HOUSE
        </button>
        <Link
          to="/admin/dashboard"
          className="font-medium text-[#FFA282] hover:underline mt-2"
        >
          Back
        </Link>
        &nbsp;
      </div>
      <div className="w-9/12 my-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Price (€/night)</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Bedrooms</th>
                <th className="px-6 py-3">Beds</th>
                <th className="px-6 py-3">Guests</th>
                <th className="px-6 py-3">Bathrooms</th>
                <th className="px-6 py-3">Registration</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{property.title}</td>
                  <td className="px-6 py-4">€{property.price}</td>
                  <td className="px-6 py-4">{property.location}</td>
                  <td className="px-6 py-4">{property.bedrooms}</td>
                  <td className="px-6 py-4">{property.beds}</td>
                  <td className="px-6 py-4">{property.guests}</td>
                  <td className="px-6 py-4">{property.bathrooms}</td>
                  <td className="px-6 py-4">{property.accommodation_reg_number}</td>
                  <td className="px-6 py-4">{property.description}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEditProperty(index)}
                      className="font-medium text-[#FFA282] hover:underline"
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      onClick={() => handleDeleteProperty(index)}
                      className="font-medium text-[#FFA282] hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div className="p-6 bg-white rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editIndex !== null ? "Edit Property" : "Add New Property"}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="text-white bg-[#FFA282] hover:bg-[#E57A5a] py-1 px-3 rounded"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="title"
                placeholder="Name"
                value={propertyForm.title}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={propertyForm.price}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={propertyForm.location}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="bedrooms"
                placeholder="Bedrooms"
                value={propertyForm.bedrooms}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="beds"
                placeholder="Beds"
                value={propertyForm.beds}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="guests"
                placeholder="Guests"
                value={propertyForm.guests}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="bathrooms"
                placeholder="Bathrooms"
                value={propertyForm.bathrooms}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="accommodation_reg_number"
                placeholder="Registration Number"
                value={propertyForm.accommodation_reg_number}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={propertyForm.description}
                onChange={handleInputChange}
                className="border p-2 rounded h-20"
              />
              <button
                onClick={handleImageUpload}
                className="bg-[#FFA282] hover:bg-[#E57A5a] text-white py-2 px-4 rounded"
              >
                Upload Images
              </button>
              <button
                onClick={handleSaveProperty}
                className="bg-[#FFA282] hover:bg-[#E57A5a] text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Properties;



// import { useEffect, useState } from "react";
// import axios from "axios";
// import LoadingSpinner from "@/Components/micro/LoadingSpinner";
// import { Link } from "react-router-dom";

// const Properties = () => {
//   const [properties, setProperties] = useState();
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/admin/properties');
//         setProperties(response.data);
//       } catch (error) {
//         console.error("Error fetching properties data:", error);
//         setError("Failed to fetch properties data.");
//       }
//     };

//     fetchProperties();
//   }, []);


//   if (!properties) {
//     return (
//         <div style={{height: "69vh"}} className='flex justify-center'>
//             <LoadingSpinner speed="0.3" color="#FFA282" size="90" 
//             title="Loading your properties..." margin="8"/>
//         </div>
//     )  
// }


//   return (
// <div className="flex justify-center items-center flex-col ">
//   <div className="flex justify-center items-center flex-col mt-10"> 
//     <h2 className="text-4xl mb-4">Properties</h2>
//     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-9/12">
//       ADD HOUSE
//     </button>
//     <Link to="/admin/dashboard" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2">Back</Link> &nbsp;
//   </div>
//   <div className="h-[50vh] w-9/12 my-10">
//     <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                   <th scope="col" class="px-6 py-3">
//                       Propety Name
//                   </th>
//                   <th scope="col" class="px-6 py-3">
//                       Location
//                   </th>
//                   <th scope="col" class="px-6 py-3">
//                       Registration Number
//                   </th>
//                   <th scope="col" class="px-6 py-3">
//                     Price (per night)
//                   </th>
//                   <th scope="col" class="px-6 py-3">
//                     <span class="sr-only">Edit</span>
//                   </th>
//               </tr>
//           </thead>
//           <br />
//           <tbody>
//               {properties.map(property => (
//                   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                   <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                       {property.title}
//                   </th>
//                   <td class="px-6 py-4">
//                       {property.location}
//                   </td>
//                   <td class="px-6 py-4">
//                       {property.accommodation_reg_number}
//                   </td>
//                   <td class="px-6 py-4">
//                       €{property.price_per_night}
//                   </td>
//                   <td class="px-6 py-4 text-right">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> &nbsp;
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
//                   </td>
//               </tr>
//               ))}
//           </tbody>
//       </table>
//     </div>
//   </div>
// </div>


//   );
// };

// export default Properties;