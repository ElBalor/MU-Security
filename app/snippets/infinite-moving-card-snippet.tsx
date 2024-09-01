"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Democracy, often heralded as the best form of governance, is defined by the ability of citizens to elect representatives through free and fair elections. However, despite its merits, democracy can also lead to instability, political corruption, and electoral violence—particularly when elections become contentious and competitive.",
    name: "Mfon Umana",
    title: "Curbing Electoral Violence: Myth or Reality",
  },
  {
    quote:
      "The primary duty of the Nigerian government is to ensure the security and welfare of its people, as stated in Section 14(2b) of the 1999 Constitution. To fulfill this responsibility, the government relies on specialized agencies to combat crime. However, no nation can single-handedly manage crime; citizen involvement is essential. This makes the obligation of citizens in crime prevention and control crucial to any effective crime-fighting strategy.",
    name: "Mfon Umana",
    title: "Citizens' Obligation Toward Breaking the Crime Triangle in Nigeria",
  },
  {
    quote:
      "The August Break, is traditionally a period of reduced rainfall in southern Nigeria, marked by cultural and educational activities. However, in 2024, this period was overshadowed by a nationwide protest against the government, known as the END BAD GOVERNMENT IN NIGERIA 2024 movement. The protest, which began on August 1st and was set to last until August 10th, was fueled by widespread dissatisfaction with the governments economic policies, particularly the removal of petrol subsidies and unification of foreign exchange rates, which led to a significant increase in the cost of living.",
    name: "Mfon Umana",
    title: "August “Break” Protest in Nigeria",
  },
  {
    quote:
      "Pride, when excessive, can lead to overconfidence and a sense of invulnerability. In a national context, this manifests as a refusal to acknowledge vulnerabilities or threats. Just as Mr. Darcys initial pride blinds him to the needs and feelings of others, a nation's pride can blind it to the real and present dangers it faces.",
    name: "Eric Yaka",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "n todays increasingly interconnected world, the security of a nation is no longer solely defined by its military might or economic power. True security encompasses a broad range of factors, from social cohesion and political stability to the ability to respond to emerging threats with agility and foresight. As nations grapple with both traditional and non-traditional security challenges, the importance of unity and vigilance becomes ever more critical.",
    name: "Eric Yaka",
    title: "The Strength of a Nation",
  },
];
