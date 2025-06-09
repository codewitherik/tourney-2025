// src/lib/genai.js
import { GoogleGenerativeAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_GENAI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
export default genAI;
