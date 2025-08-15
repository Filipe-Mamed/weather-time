import axios from "axios";

const UNSPLASH_API_KEY = import.meta.env.VITE_API_KEY_UNSPLASH

const UNSPLASH_BASE_URL = import.meta.env.VITE_BASE_URL_UNSPLASH

export async function fetchCityImages(city: string){
    const response = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
        params: {
            query: city,
            client_id: UNSPLASH_API_KEY,
            per_page: "landscape"
        }
    })
    return response.data.results
}