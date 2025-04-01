import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

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
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mt-1 focus:border-[#FFA282] focus:outline-none"
            placeholder="Your country"
          />
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
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#FF9874] hover:bg-[#E57A5a] text-white font-bold py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>

       {/* lista de reviews */}
      <div>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{review.name}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-sm text-gray-500">From: {review.nationality}</p>
              <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
              <p className="text-sm text-yellow-500 mt-1">Rating: {"⭐".repeat(review.rating)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;