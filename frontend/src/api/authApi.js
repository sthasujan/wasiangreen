import axios from "axios";

// const API_URL = "http://localhost:5000/api/auth";

const API_URL =
  "https://wasiangreen-backend.onrender.com/api/auth";

export const loginAdmin = async (data) => {
  const response = await axios.post(
    `${API_URL}/login`,
    data
  );

  return response.data;
};