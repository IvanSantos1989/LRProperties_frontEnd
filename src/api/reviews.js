const { default: axios } = require("axios")
const api = "http://127.0.0.1:8000/api"


const fetchReviews = async () => {
    try{
        const response = await axios(`${api}/reviews`)
        return response.data
    } catch (error) {
        return error
    }
}

const fetchReviewTypes = async () => {
    try{
        const response = await axios(`${api}/review_types`)
        return response.data
    } catch (error) {
        return error
    }
}

export {fetchReviews}