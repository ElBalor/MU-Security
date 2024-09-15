import Image from "next/image";
import React, { useState } from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import Lock from "../public/LockTop.png";
import Pad from "../public/LockMain.png";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-245.svg",
  },
  {
    image: "/logo/logoipsum-225.svg",
  },
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-249.svg",
  },
  {
    image: "/logo/stripelogo.png",
  },
];

const Brands = () => {
  const [isPremium, setIsPremium] = useState(false);

  const SetPlay = () => {
    setTimeout(() => {
      setIsPremium(true);
    }, 1500); // Delay of 2 seconds
  };
  return (
    <div>
      <div className=" p-4 mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div
          className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
        >
          The Latest brands <br /> Of MUU Security
        </div>

        <p className="mt-4 text-lg font-normal  text-amber-400 max-w-lg text-center mx-auto">
          Unlock Premium Version of MUU Security
        </p>

        <div className="items-center justify-center mx-auto md:w-3/5 cursor-pointer">
          {/* {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
              />
            </div>
          ))} */}

          <div className="w-full h-auto mx-auto">
            <div className="w-full">
              <video
                loop
                muted
                autoPlay
                playsInline
                preload="false"
                className="w-full h-auto bg-opacity-15"
                src="/encryption.webm"
              />
              <div
                onClick={SetPlay}
                className="flex flex-col absolute md:top-[50%] md:left-[47%] sm:top-[40%] sm:left-[42%] top-[36%] left-[41%] items-center group cursor-pointer w-auto h-auto"
              >
                <Image
                  src="/LockTop.png"
                  alt="locktop"
                  width={50}
                  height={50}
                  className="translate-y-5 transition-all duration-300 group-hover:translate-x-5"
                />
                <Image
                  src="/LockMain.png"
                  alt="lockMain"
                  width={70}
                  height={70}
                  className="z-10 animate-spin hover:animate-pulse hover:scale-90 hover:duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white",
            font.className
          )}
        >
          Get Reaady🔥
        </div>

        <div className="items-center flex justify-center flex-col text-white">
          <Image
            src="/images/Balor.jpg"
            alt="logo"
            width={1000}
            height={1000}
            className="pt-2 xl:pt-0 xl:w-24 xl:h-24 h-20 w-20 rounded-full"
          />

          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Developer</div>
            <div className="text-sm">Eric Yaka, Software Developer</div>
          </div>
        </div>
      </div>
      {isPremium && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-b from-cyan-200 to-cyan-800 bg-opacity-45 w-full h-[300px] xl:h-[300px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-cyan-500">
            {/* <Image
             src={Block}
             alt="block"
             width={100}
             height={100}
             className="fixed z-0 w-full h-[600px] xl:h-[450px] xl:w-[700px] opacity-60 blur-md"
           /> */}
            <h1 className="text-center mt-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black">
              MUU Security
            </h1>
            <p className="xl:text-xl text-xl relative z-20 text-transparent bg-clip-text bg-gradient-to-br from-gray-800 via-black to-gray-600 font-semibold ">
              MUU-SECURITY Will be releasing It&apos;s premium Version, Which
              will be coming very soon
            </p>
            <div
              onClick={() => setIsPremium(false)}
              className="relative top-24 cursor-pointer rounded-md bg-gradient-to-r from-red-700 to-blue-700  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-blue-600 shadow-lg shadow-red-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brands;
