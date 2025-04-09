// // // See https://developers.google.com/apps-script/guides/properties
// // // for instructions on how to set the API key.
// // const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY' , process.env.NEXT_PUBLIC_GEMINI_API_KEY);

// // export function GenerateScriptText({topic}) {
// //   const generationConfig = {
// //     temperature: 1,
// //     topP: 0.95,
// //     topK: 64,
// //     maxOutputTokens: 65536,
// //     responseMimeType: 'text/plain',
// //   };

// //   const data = {
// //     generationConfig,
// //     contents: [
// //       {
// //         role: 'user',
// //         parts: [
// //           { text: `write a two different script for 30 second video on Topic: ${topic} ,\n.Give me response in JSON format and follow the schema\n-{\n  script:[\n{\n content:\'\'\n},\n]\n}` },
// //         ],
// //       },
// //       {
// //         role: 'model',
// //         parts: [
// //           { text: 'The user wants two different 30-second video scripts about the fantasy genre.\nThe response needs to be in JSON format, following the specified schema:\n```json\n{\n  "script": [\n    {\n      "content": ""\n    },\n    {\n      "content": ""\n    }\n  ]\n}\n```\n\nEach script should be roughly 30 seconds long. A typical speaking rate is around 150 words per minute, so 30 seconds is about 75 words. I need to create two distinct scripts focusing on fantasy themes.\n\n**Script 1 Idea:** Focus on the wonder and escapism of fantasy. Highlight magical elements, mythical creatures, and epic quests. Visuals could be sweeping landscapes, glowing magic, dragons, etc.\n\n**Script 2 Idea:** Focus on the darker, more grounded side of fantasy, or perhaps the personal journey within a fantasy world. Highlight struggles, choices, maybe a slightly grittier tone or a focus on character growth amidst magic. Visuals could be shadowed forests, tense standoffs, a lone hero against the odds.\n\nLet\'s draft the content for each script, keeping the 75-word count in mind.\n\n**Script 1 Draft (Wonder/Escapism):**\n\n**(Scene: Opens with a shot sweeping over a majestic, impossible mountain range under twin moons. Cuts to a glowing magical portal, then a brief glimpse of a soaring dragon.)**\n\n**Voiceover (Warm, wondrous):** Ever dream of worlds beyond our own? Where magic breathes life into the air, and mythical creatures roam hidden valleys?\n\n**(Scene: Shows a character discovering an ancient, glowing artifact. Cuts to a diverse group of heroes looking determined.)**\n\n**Voiceover:** Journey alongside heroes on epic quests. Unravel ancient prophecies, wield unimaginable power, and stand against encroaching darkness.\n\n**(Scene: Ends with a shot of a magnificent, fantastical city.)**\n\n**Voiceover:** Escape the ordinary. Dive into the limitless realms of Fantasy. What adventure awaits you?\n\n*Word count check:* ~65 words. Looks good for 30 seconds with visuals.\n\n**Script 2 Draft (Grit/Personal Journey):**\n\n**(Scene: Opens with a shot of a lone figure walking through a dark, misty forest. Cuts to a close-up of their determined but weary face.)**\n\n**Voiceover (Slightly deeper, more serious):** Not all magic is bright. Some worlds hide sharp edges, where shadows cling and choices carry heavy weight.\n\n**(Scene: Shows a tense negotiation in a dimly lit tavern. Cuts to a brief, intense sword clash.)**\n\n**Voiceover:** It\'s more than just dragons and spells. It\'s about the grit it takes to survive, the alliances forged in fire, the sacrifices made for a sliver of hope.\n\n**(Scene: Ends with the lone figure emerging from the forest, looking towards a challenging horizon.)**\n\n**Voiceover:** Fantasy isn\'t just escape; it\'s facing the impossible and finding the strength within. Dare to explore?\n\n*Word count check:* ~69 words. Also suitable for 30 seconds.\n\nNow, I need to put these into the specified JSON format.' },
// //           { text: '```json\n{\n  "script": [\n    {\n      "content": "**Script 1: The Call to Adventure**\\n\\n**(Video: Fast cuts showing epic fantasy landscapes - soaring castles, mystical forests, a dragon\'s silhouette against a setting sun. Upbeat, wondrous music begins.)**\\n\\n**VO (Excited, awe-struck):** Feel that pull? The whisper of ancient magic? The glint of treasure in a dragon\'s hoard?\\n\\n**(Video: Shows a hand reaching for a glowing sword, a map unfurling, diverse heroes gathering.)**\\n\\n**VO:** Beyond the veil of the ordinary lie realms of impossible beauty and thrilling danger. Where heroes are forged, prophecies unfold, and destinies await.\\n\\n**(Video: Quick montage - magical spell effect, clash of swords, a griffin taking flight. Music swells.)**\\n\\n**VO:** Answer the call. Your epic journey begins now. Explore the limitless worlds of Fantasy!\\n\\n**(Text on screen: FANTASY. Explore the Worlds Within.)**"\n    },\n    {\n      "content": "**Script 2: Shadows and Steel**\\n\\n**(Video: Opens with darker, atmospheric shots - rain on cobblestones, a figure cloaked in shadows, glowing runes on ancient stone. Moody, slightly tense music.)**\\n\\n**VO (Gravelly, mysterious):** Think fantasy is all sunshine and elves? Think again. Some worlds bite back. Magic has a price, and shadows hold teeth.\\n\\n**(Video: Quick cuts - A tense standoff in a tavern, a close-up of worried eyes, a brief, sharp sword fight in dim light.)**\\n\\n**VO:** It\'s about survival. Forging alliances in treacherous times. Wielding power that could consume you. Making choices when every path leads to peril.\\n\\n**(Video: A lone warrior faces a monstrous silhouette in the fog. Music hits a dramatic beat.)**\\n\\n**VO:** Dare to walk the darker paths? Where grit matters as much as magic. This is Fantasy.\\n\\n**(Text on screen: FANTASY. Dare to Explore.)**"\n    }\n  ]\n}\n```' },
// //         ],
// //       },
// //       {
// //         role: 'user',
// //         parts: [
// //           { text: 'INSERT_INPUT_HERE' },
// //         ],
// //       },
// //     ],
// //   };

// //   const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-preview-03-25:generateContent?key=${apiKey}`;
// //   const options = {
// //     method: 'POST',
// //     contentType: 'application/json',
// //     payload: JSON.stringify(data)
// //   };

// //   const response = UrlFetchApp.fetch(url, options);
// //   console.log(response.getContentText());
// //   return response.getContentText();
// // }

// let isGenerating = false;

// export const GenerateVideoScript = async (topic) => {

//     if (isGenerating) return;
//     isGenerating = true;

//     const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

//     const prompt = `Write two different scripts for a 30-second video on Topic: {${topic}}.
//   Give me response in JSON format and follow this schema:
//   {
//     "script": [
//       { "content": "" },
//       { "content": "" }
//     ]
//   }`;

//     const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-preview-03-25:generateContent?key=${apiKey}`;

//     const requestBody = {
//       generationConfig: {
//         temperature: 1,
//         topP: 0.95,
//         topK: 64,
//         maxOutputTokens: 2048,
//         responseMimeType: "application/json",
//       },
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: prompt }],
//         },
//       ],
//     };

//     try {
//       const res = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const result = await res.json();
//       console.log("Gemini response:", result);
//       return result;
//     } catch (err) {
//       console.error("Error calling Gemini:", err);
//     }
//   };

const {
  GoogleGenerativeAI,
  HarmCatagory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const generateScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Write two different 30-second video scripts about the topic: Cinematic.\n\nEach should be about 75 words, suitable for voiceover + visuals.\nReturn only the following JSON format (no code block or markdown):\n\n{\n  \"script\": [\n    { \"content\": \"...\" },\n    { \"content\": \"...\" }\n  ]\n}\n\nDo not use markdown symbols like **, *, or backticks. Return only plain text in the content.\n`"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"script\": [\n    { \"content\": \"From epic landscapes to intimate moments, cinema captivates. Light dances, shadows whisper, stories unfold. A hero's journey, a love's first glance, a world transformed. Every frame a painting, every scene a memory. Experience the power of visual storytelling. Immerse yourself in the art of cinema. Witness the magic. Feel the emotion. Cinema: More than just a movie.\" },\n    { \"content\": \"Imagine a world where dreams take flight. Where heroes rise, and villains fall. Where love conquers all. That's the power of cinematic storytelling. Sweeping scores, breathtaking visuals, unforgettable characters. Escape reality. Discover new worlds. Experience the extraordinary. Let the silver screen transport you. Unleash your imagination. Embrace the cinematic adventure. Cinema: Where stories come to life.\" }\n  ]\n}\n```\n"},
      ],
    },
  ],
});

export const GenerateImageScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate Image prompt of Cinematic style with all details for each scene for 30 seconds video : script : \"Imagine a world where dreams take flight. Where heroes rise, and villains fall. Where love conquers all. That's the power of cinematic storytelling. Sweeping scores, breathtaking visuals, unforgettable characters. Escape reality. Discover new worlds. Experience the extraordinary. Let the silver screen transport you. Unleash your imagination. Embrace the cinematic adventure. Cinema: Where stories come to life.\" \n\n\n  -just Give specific image prompt depends on the story line -do not give camera angle image prompt -Follow the Folowing schema and return JSON data(MAx 4-5 Images) -[ { imagePrompt: '', sceneContent: '<Script Content>'  } ]"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "{\n  \"imagePrompt\": \"A vast, dreamlike sky filled with fantastical flying creatures and airships soaring through swirling clouds.\",\n  \"sceneContent\": \"Imagine a world where dreams take flight.\"\n},\n{\n  \"imagePrompt\": \"A silhouetted figure standing atop a dramatic, rocky peak, overlooking a sprawling city with both futuristic and ancient elements; in the distance, a dark, menacing figure looms.\",\n  \"sceneContent\": \"Where heroes rise, and villains fall.\"\n},\n{\n  \"imagePrompt\": \"A tender moment between two figures in soft, golden light, perhaps a close-up of hands touching or a gentle embrace against a beautiful sunset or sunrise.\",\n  \"sceneContent\": \"Where love conquers all.\"\n},\n{\n  \"imagePrompt\": \"A montage of visually stunning scenes: a grand orchestra passionately playing, a breathtaking natural landscape, a close-up of an expressive character's face filled with emotion, and a vibrant, otherworldly environment.\",\n  \"sceneContent\": \"Sweeping scores, breathtaking visuals, unforgettable characters. Escape reality. Discover new worlds. Experience the extraordinary.\"\n},\n{\n  \"imagePrompt\": \"A beam of light projecting from a movie screen into a darkened theater, illuminating the faces of an enraptured audience.\",\n  \"sceneContent\": \"Let the silver screen transport you. Unleash your imagination. Embrace the cinematic adventure. Cinema: Where stories come to life.\"\n}\n]"},
      ],
    },
  ],
});
