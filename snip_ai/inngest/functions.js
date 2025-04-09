import axios from "axios";
import { inngest } from "./client";
import { createClient } from "@deepgram/sdk";
import { GenerateImageScript } from "../app/_context/AiModel";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

const ImagePromptScript = `Generate Image prompt of {style} style with all details for each scene for 30 seconds video : script{script} 
-just Give specific image prompt depends on the story line
-do not give camera angle image prompt
-Follow the Folowing schema and return JSON data(MAx 4-5 Images)
-[
  {
    imagePrompt: '',
    sceneContent: '<Script Content>' 
  }
]`;

const BASE_URL = "https://aigurulab.tech";

export const GenerateVedioData = inngest.createFunction(
  { id: "genrate-video-data" },
  { event: "generate-video-data" },
  async ({ event, step }) => {
    const { script, topic, title, caption, videoStyle, voice ,recordId } = event?.data;
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);

    //phle audio file genrate krege.....
    const GenerateAudioFile = await step.run("GenrateAudioFile", async () => {
      const result = await axios.post(
        BASE_URL + "/api/text-to-speech",
        {
          input: script,
          voice: voice,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
            "Content-Type": "application/json", // Content Type
          },
        }
      );
      console.log(result.data.audio); //Output Result: Audio Mp3 Url
      return result.data.audio;
      
    });

    //phir capition generate krege.....
    const GenerateCaptions = await step.run("generateCaptions", async () => {
      // STEP 1: Create a Deepgram client using the API key
      const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API);

      // STEP 2: Call the transcribeUrl method with the audio payload and options
      const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
        {
          url: GenerateAudioFile,
        },
        // STEP 3: Configure Deepgram options for audio analysis
        {
          model: "nova-3",
          // smart_format: true,
        }
      );
      return result.results?.channels[0]?.alternatives[0]?.words;
      // if (error) throw error;
      // // STEP 4: Print the results
      // if (!error) console.dir(result, { depth: null });
    });

    //phir Image Prompt generate krege script se.....
    const GenrateImagePrompts = await step.run(
      "genrateImagePrompt",
      async () => {
        const FinalPrompt = ImagePromptScript.replace(
          "{style}",
          videoStyle
        ).replace("{script}", script);
        const result = await GenerateImageScript.sendMessage(FinalPrompt);
        const resp = JSON.parse(result.response.text());
        return resp;
      }
    );

    //Genrate Images Using AI....
    const GenerateImages = await step.run("generateImages", async () => {
      let images = [];
      images = await Promise.all(
        GenrateImagePrompts.map(async (element) => {
          const result = await axios.post(
            BASE_URL + "/api/generate-image",
            {
              width: 1024,
              height: 1024,
              input: element?.imagePrompt,
              model: "sdxl", //'flux'
              aspectRatio: "1:1", //Applicable to Flux model only
            },
            {
              headers: {
                "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
                "Content-Type": "application/json", // Content Type
              },
            }
          );
          console.log(result.data.image); //Output Result: Base 64 Image
          return result.data.image;
        })
        
      );
      return images;
    });
    // saving all data to database.....
    const UpdatedB = await step.run("updatedb",async()=>{
       const result = await convex.mutation(api.videoData.UpdateVideoData,{
          recordId: recordId,
          audioUrl:GenerateAudioFile,
          captionJson : GenerateCaptions,
          images: GenerateImages
       })
        return result;
    })
    return "executed succesfully";
  }
);
