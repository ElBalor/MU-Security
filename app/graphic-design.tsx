"use client";

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";
import { useState } from "react";

const GraphicDesign = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          MU-WATCH MAGAZINE <br />
        </div>

        <div className="text-center mx-auto max-w-lg">
          <p className="mt-4 text-lg font-normal text-neutral-300">
            The security magazine, launched as an extension of MUU Security,
            serves as a platform dedicated to delivering reliable and unbiased
            information on security matters. As a specialized publication, its
            primary focus is to offer readers a thorough understanding of
            various security-related topics, including national security, public
            safety, cybersecurity, and emerging threats.
            {isExpanded && (
              <span>
                {" "}
                By presenting factual, objective insights, the magazine aims to
                fill a critical gap in the public discourse, where
                misinformation or one-sided perspectives can often cloud
                understanding of such complex issues. One of the magazine’s key
                objectives is to foster informed public opinion by exploring
                security from multiple angles, providing expert analysis,
                updates on current developments, and in-depth coverage of
                policies and strategies. Whether it pertains to governmental
                security measures, law enforcement actions, technological
                advancements in cybersecurity, or challenges related to
                terrorism and crime, the publication seeks to empower readers
                with knowledge that is essential for navigating the increasingly
                intricate world of security. In addition to news and analysis,
                the magazine may also feature interviews with professionals in
                the field, case studies, and opinion pieces from thought leaders
                to offer a balanced perspective on security trends. Its
                commitment to unbiased reporting ensures that the audience
                receives comprehensive coverage that does not cater to any
                particular agenda but instead highlights facts and expert
                viewpoints. Overall, the security magazine stands as an
                essential resource for anyone interested in understanding
                security in its many facets, encouraging a well-informed society
                capable of engaging in meaningful discussions and
                decision-making on critical security matters within the country.
              </span>
            )}
          </p>
          <button
            onClick={toggleReadMore}
            className="mt-2 text-blue-500 underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <ThreeDCardExample />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <EvervaultCardSnippet />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
