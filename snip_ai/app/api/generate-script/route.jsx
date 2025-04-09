import { generateScript } from "../../_context/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `
Write two different 30-second video scripts about the topic: {topic}.

Each should be about 75 words, suitable for voiceover + visuals.
Return only the following JSON format (no code block or markdown):

{
  "script": [
    { "content": "..." },
    { "content": "..." }
  ]
}

Do not use markdown symbols like **, *, or backticks. Return only plain text in the content.
`


export async function POST(req){
    const {topic} = await req.json();
    const PROMPT = SCRIPT_PROMPT.replace("{topic}", topic);
    const result  = await generateScript.sendMessage(PROMPT)
    const resp = result?.response?.text();

    return NextResponse.json(JSON.parse(resp));

}