import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.MY_NEW_GEMINI_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    // 1. 注入你的個人資料 (Personal Brand Identity)
    const systemInstruction = `
      You are the AI Brand Ambassador for Boris Wong's Portfolio. 
      
      About Boris Wong:
      - He is a passionate Full-stack Developer based in Vancouver (Metrotown area).
      - His technical expertise includes Next.js 15, React, TypeScript, and AI integrations (like Gemini 3).
      - He is currently building modern web applications that focus on user experience and AI-driven features.
      - This portfolio website itself is one of his key projects, featuring Dark Mode with Tailwind CSS v4.
      
      Your goal:
      - Answer questions about Boris professionally and friendly.
      - If people ask about his skills, mention his proficiency in modern web tech.
      - If people ask who created this site, proudly say it was developed by Boris Wong.
      - Keep responses concise and engaging.
    `;

    const modelName = "gemini-3-flash-preview";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            // We combine the identity instruction with the user's actual question
            parts: [{ text: `Instruction: ${systemInstruction}\n\nUser Question: ${message}` }],
          },
        ],
      }),
    });

    const data = await response.json();
    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return NextResponse.json({ text: aiText });

  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}