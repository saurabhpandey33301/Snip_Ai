"use client";
import React from "react";
import { Button } from "../../components/ui/moving-border";
import { Button as Btn } from "../../components/ui/button";
import { AuroraText } from "../../components/magicui/aurora-text";
import { useAuthContext } from "../provider";
import Link from "next/link";
import Authentication from "./Authentication";

export default function Pricing() {
  const { user } = useAuthContext();
  return (
    <div className="w-full px-5 flex flex-col gap-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center ">
          Simple <AuroraText>Pricing </AuroraText>
        </h1>
      </div>
      <div className="flex items-center lg:flex  flex-col lg:flex-row  gap-10 px-0 lg:px-20 ">
        <div className="w-5/7 h-[70vh] px-10 py-5 border-2 border-stone-600 rounded-lg flex justify-center items-center ">
          <div className="flex flex-col gap-4 lg:gap-5">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold">Free Plan</h1>
              <h2 className="text-sm text-gray-400">
                Use our Free Plan and enjoy our free services!
              </h2>
            </div>
            <h1 className="text-xl lg:text-3xl">₹ 0<span className="text-gray-400 text-xl font-mono">/PLAN</span></h1>
            <hr />
            <h2 className="text-sm text-gray-400">✨ What’s Included:</h2>
            <h2 className="text-sm">✅ Kick off with 3 Free Credits — on us!</h2>
            <h2 className="text-sm">✅ Zero upfront cost. No strings attached.</h2>
            <h2 className="text-sm">✅ Enjoy premium features and free perks instantly.</h2>

            <div className="w-full ">
              {user ? (
                <Link href={"/dashboard"} className="w-full">
                  <Btn size="lg" className="w-full">
                    Get Started
                  </Btn>
                </Link>
              ) : (
                <Authentication>
                  <Btn size="lg" className="w-full">
                    Get Started
                  </Btn>
                </Authentication>
              )}
            </div>
          </div>
        </div>

        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="w-full h-full px-10 py-5 border-2 rounded-xl flex justify-center items-center ">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className=" text-3xl lg:text-5xl font-bold">Basic Plan</h1>
                <h2 className="text-sm text-gray-400 mt-1">
                  A pocket-friendly plan to get started without breaking the
                  bank.
                </h2>
              </div>
              <h1 className="text-3xl mt-4 font-semibold">₹ 9<span className="text-gray-400 text-xl font-mono">/PLAN</span></h1>
              <hr className="my-3" />
              <h2 className="text-sm text-gray-400 mb-1">
                ✨ What’s Included:
              </h2>
              <h2 className="mb-1">
                ✅ 10 Free Credits to kickstart your journey
              </h2>
              <h2 className="mb-1">✅ Unbeatable value for your money</h2>
              <h2 className="mb-1">
                ✅ Experience the quality — try it, love it!
              </h2>

              <div className="w-full ">
                {user ? (
                  <Link href={"/billing"} className="w-full">
                    <Btn size="lg" className="w-full">
                      Get Started
                    </Btn>
                  </Link>
                ) : (
                  <Authentication>
                    <Btn size="lg" className="w-full">
                      Get Started
                    </Btn>
                  </Authentication>
                )}
              </div>
            </div>
          </div>
        </Button>

        <div className="w-5/7 h-[70vh] px-10 py-5 border-2 border-stone-600 rounded-lg flex  ">
          <div className="flex flex-col gap-1 lg:gap-2.5">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold">Premium Plan</h1>
              <h2 className="text-sm text-gray-400 mt-1">
                Elevate your experience — enjoy premium features and become a
                valued member!
              </h2>
            </div>
            <h1 className="text-xl lg:text-3xl mt-4 font-semibold">₹ 99<span className="text-gray-400 text-xl font-mono">/PLAN</span></h1>
            <hr className="my-3" />
            <h2 className="text-sm text-gray-400 mb-1">✨ What’s Included:</h2>
            <h2 className="text-sm" >
              ✅ 120 High-value credits 
            </h2>
            <h2  className="text-sm">
              ✅ Bonus credits — extra value, no extra cost
            </h2>
            <h2 className="text-sm">
              ✅ Exclusive long-term perks & member benefits
            </h2>

            <div className="w-full ">
              {user ? (
                <Link href={"/billing"} className="w-full">
                  <Btn size="lg" className="w-full">
                    Get Started
                  </Btn>
                </Link>
              ) : (
                <Authentication>
                  <Btn size="lg" className="w-full">
                    Get Started
                  </Btn>
                </Authentication>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
