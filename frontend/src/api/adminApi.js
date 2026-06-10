import axios from "axios";

// const API =
//   "http://localhost:5000/api";

const API =
  "https://wasiangreen-backend.onrender.com/api";

const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem(
    "token"
  )}`,
});

// ENQUIRIES
export const fetchEnquiries =
  async () => {
    const response = await axios.get(
      `${API}/enquiries`,
      {
        headers: getHeaders(),
      }
    );

    return response.data;
  };

export const updateEnquiry =
  async (id, status) => {
    const response = await axios.put(
      `${API}/enquiries/${id}`,
      { status },
      {
        headers: getHeaders(),
      }
    );

    return response.data;
  };

export const deleteEnquiry =
  async (id) => {
    const response =
      await axios.delete(
        `${API}/enquiries/${id}`,
        {
          headers: getHeaders(),
        }
      );

    return response.data;
  };

// QUESTIONS
export const fetchQuestions =
  async () => {
    const response = await axios.get(
      `${API}/questions`,
      {
        headers: getHeaders(),
      }
    );

    return response.data;
  };

export const updateQuestion =
  async (id, status) => {
    const response = await axios.put(
      `${API}/questions/${id}`,
      { status },
      {
        headers: getHeaders(),
      }
    );

    return response.data;
  };

export const deleteQuestion =
  async (id) => {
    const response =
      await axios.delete(
        `${API}/questions/${id}`,
        {
          headers: getHeaders(),
        }
      );

    return response.data;
  };

