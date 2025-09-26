import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// --- THIS LINE IS UPDATED with your new model ---
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

// Generic function to proxy requests to Gemini API
async function proxyToGemini(req, res) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server. Please check your .env file.' });
    }
    
    try {
        const geminiResponse = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body), // Forward the body from the client
        });

        const geminiData = await geminiResponse.json();

        if (!geminiResponse.ok) {
            console.error('Gemini API Error:', geminiData);
            return res.status(geminiResponse.status).json({ error: geminiData.error?.message || 'An error occurred with the Gemini API.' });
        }
        
        // Extract the JSON text and parse it before sending back to client
        const jsonText = geminiData.candidates[0].content.parts[0].text;
        const parsedResult = JSON.parse(jsonText);
        
        res.status(200).json(parsedResult);

    } catch (error) {
        console.error('Server Proxy Error:', error);
        res.status(500).json({ error: 'An internal server error occurred.' });
    }
}

// Route to generate questions
app.post('/api/generate', proxyToGemini);

// Route to evaluate answers
app.post('/api/evaluate', proxyToGemini);

app.listen(PORT, () => {
    console.log(`Server for Gemini is running on http://localhost:${PORT}`);
});