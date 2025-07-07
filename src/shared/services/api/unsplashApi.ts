import axios from "axios";

const UNSPLASH_ACESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY_IMG

const UNSPLASH_BASE_URL = import.meta.env.VITE_UNSPLASH_BASE_URL

export async function fetchCityImages(city: string){
    const response = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
        params: {
            query: city,
            client_id: UNSPLASH_ACESS_KEY,
            per_page: "landscape"
        }
    })
    return response.data.results
}