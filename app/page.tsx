"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="flex md:-top-80 -top-24 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Welcome to MUU- <br /> Security
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          MUU Security is a one stop security outfit poised to raise the
          security consciousness of Nigerians. It has in stock varying books on
          security, motivational/Religion books. It also publishes the
          MU-magazine, a quarterly security magazine. Please peruse the site for
          information about our services.
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 hover:bg-slate-500 hover:scale-90 hover:duration-300 mx-auto my-6 text-white "
        >
          Get a Book
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopifyStoresRef}>
          <ShopifyStores />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div id="services">
          <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />
      </div>
    </div>
  );
}
