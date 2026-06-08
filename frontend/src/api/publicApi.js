import axios from "axios";

const API =
  "http://localhost:5000/api";

export const submitEnquiry =
  async (data) => {
    const response = await axios.post(
      `${API}/enquiries`,
      data
    );

    return response.data;
  };

export const submitQuestion =
  async (data) => {
    const response = await axios.post(
      `${API}/questions`,
      data
    );

    return response.data;
  };