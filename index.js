import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI("AIzaSyC2aBiV0p904qwpsUxb8lj15bT86Os92oU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const port = 3000;

app.get("/lifesciences",(req,res) =>{  
      // Function to get a random question
      function getRandomQuestion1() {
        const depthofknowledge = [
            "1. Explain the concept of epigenetics and its impact on gene expression. How do modifications such as DNA methylation and histone acetylation affect cellular processes?",
            "2. Discuss the differences between prokaryotic and eukaryotic gene regulation. How do these differences affect experimental approaches in molecular biology?",
            "3. Describe the process and significance of RNA interference (RNAi). How does RNAi contribute to gene silencing, and what are its potential applications in research and therapy?",
            "4. What are the primary differences between cellular respiration and fermentation? In what scenarios would a cell preferentially use one process over the other?"
          ];
        const randomIndex = Math.floor(Math.random() * depthofknowledge.length);
        return depthofknowledge[randomIndex];
      }
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
