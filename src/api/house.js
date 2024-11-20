import axios from "axios"

const fetchHostels = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/houses')
        return response.data;
    } catch (error) {
        return error;
    }
}

const fetchHostelData = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/houses/${id}`)
        return response.data;
    } catch (error) {
        return error;
    }
}



export {fetchHostels, fetchHostelData}