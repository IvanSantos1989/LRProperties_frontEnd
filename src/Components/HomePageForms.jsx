
import { fetchReviewTypes } from "@/api/reviews";
import axios from "axios";
import { useEffect, useState } from "react"

export function HomePageForms() {
  const [countries, setCountries] = useState([]);
  const [formType, setFormType] = useState(null)
  const [step, setStep] = useState(1)

  // Contact form fields
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Review form fields
  const [reviewName, setReviewName] = useState("")
  const [country, setCountry] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState("")

  const [reviewTypes, setReviewTypes] = useState([]);

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


  const resetForm = () => {
    setFormType(null)
    setStep(1)
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
    setReviewName("")
    setCountry("")
    setComment("")
    setRating("")
  }

  const handleSubmit = () => {
    
    console.log(
      formType === "contact" ? { name, phone, email, message } : { name: reviewName, country, comment, rating },
    )

    setStep(3)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-[10vh]">
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-center">Get in touch with us!</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => {
                setFormType("contact")
                setStep(2)
              }}
              className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-400 dark:hover:border-orange-400 transition-colors flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-medium text-lg">Contact us</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Send us a message and we will answer as fast as possible
              </span>
            </button>

            <button
              onClick={() => {
                setFormType("review")
                setStep(2)
              }}
              className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-400 dark:hover:border-orange-400 transition-colors flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <span className="font-medium text-lg">Rate us</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Share your experience with other guests
              </span>
            </button>
          </div>
        </div>
      )}

      {step === 2 && formType === "contact" && (
        <div className="space-y-4">
          <div className="flex items-center mb-6">
            <button
              onClick={() => setStep(1)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mr-2"
            >
              Back
            </button>
            <h3 className="text-xl font-bold">Talk to us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name-step" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name-step"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="phone-step" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone number
              </label>
              <input
                type="tel"
                id="phone-step"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
                placeholder="Your phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email-step" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email-step"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="message-step" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message-step"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-md transition-colors"
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      )}

      {step === 2 && formType === "review" && (
        <div className="space-y-4">
          <div className="flex items-center mb-6">
            <button
              onClick={() => setStep(1)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mr-2"
            >
             Back
            </button>
            <h3 className="text-xl font-bold">Rate us!</h3>
          </div>

          <div>
            <label
              htmlFor="review-name-step"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="review-name-step"
              value={reviewName}
              onChange={(e) => setReviewName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="country-step" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Country
            </label>
            <select
              id="country-step"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
            >
              <option value="">Select your country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="comment-step" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Comment
            </label>
            <textarea
              id="comment-step"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
              placeholder="Share your experience here..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="rating-step" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Rating
            </label>
            <select
              id="rating-step"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
            >
              <option value={0}>Select a rating</option>
              {reviewTypes.map(reviewType => {
                return <option key={reviewType} value={reviewType.id}>{reviewType.stars} - {reviewType.label}</option>
              })}
            </select>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-md transition-colors"
            >
              Rate
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Done!</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {formType === "contact"
              ? "Thank you for contacting us. We will answer as fast as possible."
              : "Thank you for your share. Your opinion matters the most to us."}
          </p>
          <button
            onClick={resetForm}
            className="mt-4 px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-md transition-colors"
          >
            Back
          </button>
        </div>
      )}
    </div>
  )
}