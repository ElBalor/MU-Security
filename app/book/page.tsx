"use client";

import { InlineWidget } from "react-calendly";
import readUserSession from "@/lib/action";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Books from "@/components/books/Books";
import { FaBookAtlas } from "react-icons/fa6";

const Book = () => {
  const router = useRouter();
  // useEffect(() => {
  //   const checkUserSession = async () => {
  //     const { data } = await readUserSession();
  //     if (!data?.user) {
  //       router.replace("/auth");
  //     }
  //   };

  //   checkUserSession();
  // }, [router]);

  return (
    <>
      <div className="flex flex-col  w-full h-full bg-gradient-to-br from-cyan-500/[0.79] via-purple-900 to-black  bg-grid-white/[0.02]   ">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToGraphicDesign={() => {}}
          scrollToShopifyStores={() => {}}
          scrollToBrands={() => {}}
          scrollToServices={() => {}}
        />
        <div
          className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Get A Book
        </div>
        <Books />
      </div>
    </>
  );
};

export default Book;
