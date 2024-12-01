import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./Constants";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);

export default genAI;
