import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import mysql from 'mysql2/promise';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

// Setup Google Generative AI client
const genAI = new GoogleGenerativeAI('AIzaSyBQwuqTDSSORfa7d_HeHrpc5Qv8CQMLGeo');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your database user
  database: 'user', // Replace with your database name
  password: 'mathew' // Replace with your database password
});

async function getGenerativeResponse(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}

app.post('/evaluate-answers', async (req, res) => {
  const answers = req.body;

  try {
    // Prepare prompts for evaluation
    const prompts = [];
    for (const [key, value] of Object.entries(answers)) {
      if (value && value.question && value.answer) {
        const prompt = `Evaluate the following question and answer. 
                        Question: ${value.question}
                        Answer: ${value.answer}
                        Rate the accuracy of the answer on a scale of 0 to 100.`;
        prompts.push(prompt);
      } else {
        console.error(`Invalid data for ${key}`);
      }
    }

    // Fetch completions from Google Generative AI
    const scores = await Promise.all(prompts.map(prompt => getGenerativeResponse(prompt)));

    // Process the scores and generate the response
    const results = {};
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i]?.trim() || '0';  // Adjust based on actual API response format
      const questionKey = `question${i + 1}`;
      results[questionKey] = {
        question: answers[questionKey]?.question || 'No question',
        score: parseInt(score, 10) || 0
      };
      
      // Assuming the username is included in the request body
      const username = req.body.username; 

      // Insert or update the scores in the database
      const connection = await pool.getConnection();
      await connection.query(
        'INSERT INTO user_data (username, marks) VALUES (?, ?) ON DUPLICATE KEY UPDATE marks = VALUES(marks)',
        [username, results[questionKey].score]
      );
      connection.release();
    }

    // Send the response
    res.json(results);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
