import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateAgentResponse = async (history: { role: string; text: string }[], userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in demo mode (API Key missing). I can help you book a call or explain our services!";
  }

  try {
    const chat: Chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: `You are Chris, a helpful and professional AI representative for Tangent Labs. 
      Tangent Labs specializes in building practical, high-ROI AI agents for businesses.
      Your goal is to answer questions about our services and encourage users to 'Book a Call'.
      Keep answers concise (under 50 words), friendly, and business-oriented.
      Tone: Confident, modern, efficient.
      `
      },
      history: history.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text ?? "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again or book a call directly.";
  }
};