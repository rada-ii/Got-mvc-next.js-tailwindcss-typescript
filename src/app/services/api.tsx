import axios from "axios";

const API_URL = "https://thronesapi.com/api/v2";

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${API_URL}/Characters`);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
