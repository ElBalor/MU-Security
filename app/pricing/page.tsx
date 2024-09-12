"use client";

import { useState } from "react";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/navbar";

const plans = [
  {
    index: 0,
    name: "Happiness is a Choice",
    price: " NG ₦2500",
    features: [
      "Fully responsive on all screens",

      "Full access to Content in the Book",

      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Happiness is a Choice a Book to guide you on the Choice you should make in life",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Power of Intercession",
    price: "NG ₦1500",
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "A Book that reveals the Lords Power and help you with the trials and chanllenges of your life",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Security Definition and Qoutes",
    price: "NG ₦1000",
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description: "A basic knowledge on the Security",
    button: "Contact Us",
  },
  {
    index: 3,
    name: "Security Manual for the Church",
    price: "NG ₦1000",
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "A Book that guides you on the safety measures that should be taken in the Church",
    button: "Contact Us",
  },
  {
    index: 4,
    name: "20 Inspirational Biblical Facts",
    price: "NG ₦1500",
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "A Book that guides you on the safety measures that should be taken in the Church",
    button: "Contact Us",
  },
  {
    index: 5,
    name: "Basic Security Tips",
    price: "NG ₦1500",
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "A Book that guides you on the safety measures that should be taken in the Church",
    button: "Contact Us",
  },
  {
    index: 6,
    name: "Church Security",
    feature: "Contact Us",
    price: "NG ₦3500",
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "A Book that guides you on the safety measures that should be taken in the Church",
    button: "Contact Us",
  },
  {
    index: 7,
    name: "Danger in Anger",
    feature: "Contact Us",
    price: "NG ₦3000",
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "A Book that guides you on the safety measures that should be taken in the Church",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <div
      className="w-full  md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />

      <div className="flex items-center justify-center flex-col   ">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Simple Pricing <br /> Choose your Book
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6  "
            >
              <div className={plan.style}>
                <div className="text-4xl flex  items-center font-medium">
                  {plan.name}
                  {/* render feature tag only for enterprise tab*/}
                  {plan.feature === "Contact Us" && (
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-3 flex flex-row w-28 py-1 rounded-full ml-4 items-center ">
                      Contact Us
                    </div>
                  )}
                </div>
                <div className="text-3xl pt-6 ">{plan.price}</div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg  py-2 flex space-x-2 items-center"
                    >
                      {/* render checkmark only for enterprise tab*/}
                      {plan.feature === "Contact Us" ? (
                        <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                      ) : (
                        <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      )}

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={plan.button}>
                {index === 0 && (
                  <Link
                    href="https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href="https://buy.stripe.com/14k2b65ZQ8tf5Ve28c"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-purple-400"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 3 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 4 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-fuchsia-500 to-purple-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 5 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-amber-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 6 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-gray-500 to-purple-400"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 7 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-red-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
