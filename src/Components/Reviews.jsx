import React, { useEffect, useState } from "react";
import CurrentReviews from './CurrentReviews';
import axios from "axios";
import { fetchReviewTypes } from "@/api/reviews";

const Reviews = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [comment, setComment] = useState("");

  const [rating, setRating] = useState(0);
  const [reviewTypes, setReviewTypes] = useState([]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryNames = response.data.map(country => country.name.common);
        countryNames.sort();
        setCountries(countryNames);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
      
      (async () => {
        const fetchedReviews = await fetchReviewTypes();
        setReviewTypes(fetchedReviews);
      })();
     
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !nationality || !comment || rating === 0) {
      alert("Please fill out all fields before submitting your review.");
      return;
    }

    // Adiciona o novo review à lista
    const newReview = {
      name,
      nationality,
      comment,
      rating,
      date: new Date().toLocaleDateString(),
    };
    setReviews([newReview, ...reviews]);

    // Limpa os campos do formulário
    setName("");
    setNationality("");
    setComment("");
    setRating(0);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Guest Reviews</h2>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mt-1 focus:border-[#FFA282] focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Country
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select your country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mt-1 focus:border-[#FFA282] focus:outline-none"
              placeholder="Share your experience"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border border-gray-300 p-2 rounded mt-1 focus:border-[#FFA282] focus:outline-none"
            >
              <option value={0}>Select a rating</option>
              {reviewTypes.map(reviewType => {
                return <option key={reviewType.id} value={reviewType.id}>{reviewType.stars} - {reviewType.label}</option>
              })}
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#FF9874] hover:bg-[#E57A5a] text-white font-bold py-2 px-4 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>
      <div className='flex justify-center m-10'>
        <CurrentReviews />
      </div>
    </>
)};
export default Reviews;