import axios from "axios";

// Function to send the prompt and explanation to the backend API
export const sendMessageToAI = async (prompt, explanation) => {
  let token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No authentication token found.");
  }

  token = token.replace("Token: ", ""); // Remove unnecessary prefix if exists

  try {
    const response = await axios.post(
      "https://python-tutor-peh3.onrender.com/api/gemini",
      // "http://localhost:5000/api/gemini",
      { prompt, explanation },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.text; // Return the AI's response
  } catch (error) {
    console.error("Error sending message to AI:", error);
    throw error;
  }
};
