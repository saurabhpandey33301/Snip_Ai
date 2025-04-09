"use client";
import React, { useState } from "react";
import { Input } from "../../../../@/components/ui/input";
import { Textarea } from "../../../../@/components/ui/textarea";
// import {GenerateVideoScript} from  "../../../_context/AiModel"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../@/components/ui/tabs";
import { Button } from "../../../../@/components/ui/button";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import axios from "axios";
import { useAuthContext } from "../../../provider";
import { toast } from "react-toastify";

const Suggestions = [
  "Historic Story",
  "Science Experiment",
  "Space Mysteries",
  "Romantic Story",
  "Action Story",
  "Adventure Story",
  "Comedy Story",
  "Drama Story",
  "Kids story",
  "Horror Story",
  "Tech Breakthrough",
  "True Crime Story",
  "Documentary",
];
function Topic({ onHandleInputChange }) {
  const { user } = useAuthContext();
  const [selectedTopic, setSelectedTopic] = useState("");
  const [script, setScript] = useState();
  const [loading, setloading] = useState(false);
  const [selectIndex, setSelectIndex] = useState();

  const GenerateScript = async () => {
    if (user?.credits <= 0) {
      toast.dark("Please add more credits!");
      return;
    }
    // const genScript = await GenerateVideoScript(selectedTopic);
    setloading(true);
    setSelectIndex(null);
    try {
      const result = await axios.post("/api/generate-script", {
        topic: selectedTopic,
      });
      console.log("result", result.data);
      setScript(result.data?.script);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="mb-2">Project Title</h2>
        <Input
          placeholder={"Enter Project title"}
          onChange={(e) => {
            onHandleInputChange("title", e.target.value);
          }}
        ></Input>
      </div>
      <div>
        <h2 className="">Video Topic</h2>
        <p className="text-sm text-gray-500">Select topic for your video</p>
        <Tabs defaultValue="suggestion" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your_topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestion">
            <div>
              {Suggestions.map((item, index) => (
                <Button
                  variant={"secondary"}
                  key={index}
                  onClick={() => {
                    setSelectedTopic(item);
                    onHandleInputChange("topic", item);
                  }}
                  className={`m-1 border-2 ${selectedTopic == item ? " border-blue-400" : "border-slate-600 hover:border-white "}`}
                >
                  {item}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="your_topic">
            <div className="flex flex-col gap-2">
              <h2>Enter your own topic</h2>
              <Textarea
                onChange={(e) => {
                  setSelectedTopic(e.target.value);
                  onHandleInputChange("topic", e.target.value);
                }}
                placeholder={"Enter own topic"}
              />
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-2">
          {script?.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="">Select the Script</h2>
              <div className="grid grid-cols-2 gap-5 ">
                {script.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 border rounded-xl ${selectIndex == index ? "bg-secondary border-white" : ""} `}
                    onClick={() => {
                      setSelectIndex(index);
                      onHandleInputChange("script", item.content);
                    }}
                  >
                    <h2 className="line-clamp-4 text-sm text-gray-300">
                      {item.content.replace(/\*\*/g, "")}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Button disabled={loading} size={"sm"} onClick={() => GenerateScript()}>
          {loading ? <Loader2Icon className="animate-spin" /> : <SparkleIcon />}{" "}
          Generate Script
        </Button>
      </div>
    </div>
  );
}

export default Topic;
