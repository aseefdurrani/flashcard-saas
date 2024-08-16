import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator. 
Your task is to generate educational flashcards based on the provided content. 
Each flashcard should have a question on one side and the corresponding answer on the other side. 
Ensure that the questions are clear and concise, and the answers are accurate and informative. 
The flashcards should cover key concepts, definitions, and important details from the content. 
Use simple language and avoid overly complex terms unless necessary. 
If the content is lengthy, break it down into smaller, manageable sections for each flashcard. 
Your goal is to make learning efficient and effective for the user.

Return in the following JSON Format:
{
  "flashcards": [
    {
      "front": str,
      "back": str
    }
  ]
}
`;

export async function POST(req) {
  const completion = await openai.chat.completion.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
  });

  const flashcards = JSON.parse(completion.choices[0].message.content);
  n;

  return NextResponse.json(flashcards.flashcard);
}
