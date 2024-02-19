import axios from "axios";

export const fetchImages = async (searchQuery, currentPage) => {
    axios.defaults.baseURL = "https://pixabay.com/api/";
    const key = "6950737-29a0d5130824bfea54194711c";
    const url = `?q=${searchQuery}&page=${currentPage}&key=${key}&safesearch=true&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);
    return response;
}