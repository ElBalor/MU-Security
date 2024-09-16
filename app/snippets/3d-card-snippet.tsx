"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Block from "../../public/block.jpg";
import MUWATCH from "../../public/mu-watch.jpg";

export function ThreeDCardExample() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-cyan-500 via-blue-300 to-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[23rem] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-gray-700 m-auto dark:text-white"
        >
          MU <span className="text-red-600">Watch</span>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-600"
        >
          Hover over this card..
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={MUWATCH}
            height="1000"
            width="1000"
            className="h-96 w-72 object-cover m-auto rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Coming Soon...
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Mu Magazines
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
