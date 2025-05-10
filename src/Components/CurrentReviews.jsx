import React, { useEffect, useState } from 'react'
import { Star, StarHalf } from "lucide-react"
import { fetchReviews } from "@/api/reviews";

const CurrentReviews = () => {

    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        (async () => {
            const fetchedReviews = await fetchReviews();
            setReviews(fetchedReviews);
        })();
    }, []);

  return (
    <div className='w-[70%] flex items-center justify-center'>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
              <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{review.user.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{review.nationality}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: Math.floor(review.rating.stars) }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">{review.comment}</p>
            </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default CurrentReviews