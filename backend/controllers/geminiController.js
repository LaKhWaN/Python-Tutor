const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Route to get response from Gemini API
const getGeminiResponse = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const explanation = req.body.explanation;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const mainPrompt = `You are teaching a child about the topic mentioned below
    you have to give answer in less number of lines and it should be easy to understand
    Make sure to make your response friendly and happily sounding
    Format: [👨🏻‍🏫]: <Response>
    
    Query: ${prompt}
    
    Current Question/Context: ${explanation}`;

    const result = await model.generateContent(mainPrompt);
    res.json({
      text: result.response.text(), // Gemini's response text
    });
  } catch (error) {
    console.error("Error with Gemini API:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { getGeminiResponse };
