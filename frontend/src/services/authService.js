import axios from "axios";
import { toast } from "react-toastify"; // Import react-toastify

const API_URL = "https://python-tutor-peh3.onrender.com/api/auth"; // Replace with the backend URL if needed
// const API_URL = "http://localhost:5000/api/auth"; // Replace with the backend URL if needed

// Register User
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    toast.success("Registration successful!");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.msg || "Registration failed");
    throw error.response.data;
  }
};

// Login User
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    toast.success("Login successful!");
    return response.data; // { token }
  } catch (error) {
    toast.error(error.response?.data?.msg || "Login failed");
    throw error.response.data;
  }
};
