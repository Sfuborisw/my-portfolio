import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    // Use the exact model name from your successful ListModels diagnostic
    const modelName = "gemini-3-flash-preview";
    
    // Ensure we are using the most stable endpoint for 2026
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Using the standard Chat Content structure required by Gemini 3
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
        // Adding generation config to prevent empty responses
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        },
      }),
    });

    const data = await response.json();

    // Check if Google sent back an error (e.g., malformed JSON)
    if (data.error) {
      console.error("Google API Error:", data.error);
      return NextResponse.json(
        { error: data.error.message },
        { status: 400 }
      );
    }

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiText) {
      return NextResponse.json({ error: "Empty AI response" }, { status: 500 });
    }

    return NextResponse.json({ text: aiText });
  } catch (error: unknown) {
    let errorMessage = "Server error";
    if (error instanceof Error) errorMessage = error.message;
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}