const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/recommend', async (req, res) => {
  const { description } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `...`; // Твой промпт для получения JSON с жанрами
    const result = await model.generateContent(prompt);
    const response = result.response;
    const jsonString = response.text().replace(/```json|```/g, '').trim();
    const aiParams = JSON.parse(jsonString);
    
    // Здесь ты используешь aiParams для запроса к TMDb
    // и возвращаешь список фильмов
    
    res.json({ movies: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});