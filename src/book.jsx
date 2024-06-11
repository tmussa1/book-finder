import axios from "axios";

const API_KEY = "AIzaSyD8jeJ24In1LahW1QInLYpt_tk3mURkReo";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";

export const fetchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&key=${API_KEY}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
