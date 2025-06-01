"use client";
import React from "react";
import { Button } from "../../components/ui/moving-border";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button as Btn } from "../../components/ui/button";
import { AuroraText } from "../../components/magicui/aurora-text";
export default function Pricing() {
  return (
    <div className="w-full px-5 flex flex-col gap-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center ">
          Simple <AuroraText>Pricing </AuroraText>
        </h1>
      </div>
      <div className="flex items-center lg:flex  flex-col lg:flex-row  gap-10 px-0 lg:px-20 ">
        <div className="w-5/7 h-[70vh] px-10 py-5 border-2 border-stone-600 rounded-lg flex justify-center items-center ">
          <div className="flex flex-col gap-5 lg:gap-5">
            <div>
              <h1 className="text-2xl lg:text-4xl">Free Plan</h1>
              <h2 className="text-sm text-gray-400">
                Use our Free Plan and enjoy our free services!
              </h2>
            </div>
            <h1 className="text-xl lg:text-3xl">
              ₹ 0<span className="text-gray-400">/month</span>{" "}
            </h1>
            <hr />
            <h2 className="text-sm text-gray-400">Includes</h2>
            <h2>Unlimited genration</h2>
            <h2>Value for money</h2>
            <h2>long-term benifits</h2>
            <Btn size="lg">Get Started</Btn>
          </div>
        </div>

        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="w-full h-full px-10 py-5 border-2 rounded-xl flex justify-center items-center ">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-4xl">Basic Plan</h1>
                <h2 className="text-sm text-gray-400">
                  Our Monthly Basic Plan gives you full access without
                  commitment.
                </h2>
              </div>
              <h1 className="text-3xl">
                ₹ 9<span className="text-gray-400">/month</span>{" "}
              </h1>
              <hr />
              <h2 className="text-sm text-gray-400">Includes</h2>
              <h2>Unlimited genration</h2>
              <h2>Value for money</h2>
              <h2>long-term benifits</h2>
              <Btn size="lg">Get Started</Btn>
            </div>
          </div>
        </Button>

        <div className="w-5/7 h-[70vh] px-10 py-5 border-2 border-stone-600 rounded-lg flex  ">
          <div className="flex flex-col gap-5 lg:gap-5">
            <div>
              <h1 className="text-2xl lg:text-4xl">Annual Plan</h1>
              <h2 className="text-sm text-gray-400">
                Enjoy our Annual Plan and save more with the lowest cost per
                month!
              </h2>
            </div>
            <h1 className="text-xl lg:text-3xl">
              ₹ 99<span className="text-gray-400">/year</span>{" "}
            </h1>
            <hr />
            <h2 className="text-sm text-gray-400">Includes</h2>
            <h2>Unlimited genration</h2>
            <h2>Value for money</h2>
            <h2>long-term benifits</h2>
            <Btn size="lg">Get Started</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
