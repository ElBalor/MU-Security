"use client";

import { useState } from "react";

import Link from "next/link";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/navbar";

const books = [
  {
    title: "Happiness is a Choice",
    cover: "/covers/book5.jpg",
    pdf: "/Bookpdf/happiness-is-a-choice.pdf",
  },
  {
    title: "Power of Intercession",
    cover: "/covers/power.png",
    pdf: "/Bookpdf/power-of-intercession.pdf",
  },
  {
    title: "Security Definition and Qoutes",
    cover: "/covers/book7.jpg",
    pdf: "/Bookpdf/security-definition-and-qoutes.pdf",
  },
  {
    title: "Security Manual for the Church",
    cover: "/covers/book8.jpg",
    pdf: "/Bookpdf/security-manual-for-the-church.pdf",
  },
  {
    title: "20 Inspirational Bible Facts",
    cover: "/covers/book6.jpg",
    pdf: "/Bookpdf/20_inspirational_bible_facts.pdf",
  },
  {
    title: "Basic Security Tips",
    cover: "/covers/book1.jpg",
    pdf: "/Bookpdf/basic-security-tips.pdf",
  },
  {
    title: "Church Security ",
    cover: "/covers/book3.jpg",
    pdf: "/Bookpdf/church-security-tips.pdf",
  },
  {
    title: "Danger in Anger",
    cover: "/covers/book4.jpg",
    pdf: "/Bookpdf/danger-in-anger.pdf",
  },
];

const plans = [
  {
    index: 0,
    name: "Happiness is a Choice",
    price: " NG ₦2500",
    getBook: 2500,
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
    getBook: 1500,
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
    getBook: 1000,
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Security Quotes to Live By: Wisdom from Experts and Thought Leaders",
    button: "Contact Us",
  },
  {
    index: 3,
    name: "Security Manual for the Church",
    price: "NG ₦1000",
    getBook: 1000,
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",

      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "A Practical Guide to Church Security: Policies, Procedures, and Training",
    button: "Contact Us",
  },
  {
    index: 4,
    name: "20 Inspirational Biblical Facts",
    price: "NG ₦1500",
    getBook: 1500,
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description: "Nurture your faith with 20 inspiring biblical truths.",
    button: "Contact Us",
  },
  {
    index: 5,
    name: "Basic Security Tips",
    price: "NG ₦1500",
    getBook: 1500,
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Your Guide to Personal and Property Safety - Practical advice for avoiding risks.",
    button: "Contact Us",
  },
  {
    index: 6,
    name: "Church Security",
    feature: "Contact Us",
    price: "NG ₦3500",
    getBook: 3500,
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
    getBook: 3000,
    features: [
      "Fully responsive on all screens",
      "Full access to Content in the Book",
      "Full 100% Quality",
      "One time Subscription",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description: " A Book to Help You Navigate the Dangers of Unchecked Anger",
    button: "Contact Us",
  },
];

const Pricing = () => {
  const [isPlan, setisPlan] = useState(plans[0]);

  const config = {
    public_key: "FLWPUBK_TEST-3de5ba166fde9fc02ae7f8e58933783a-X",
    tx_ref: `${Date.now()}`,
    amount: isPlan.getBook,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "heylelyaka@gmail.com",
      phone_number: "070********",
      name: "Eric Yaka",
    },
    customizations: {
      title: isPlan.name,
      description: `Payment for items in cart ${isPlan.name}`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Buy Now",
    callback: (response: any) => {
      if (response.status !== "completed") {
        console.log(response, "Failed Transaction");
      } else {
        console.log("Succes");
      }

      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("Sharp, User Closed it himself");
    },
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />

      <div className="flex items-center justify-center flex-col">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Simple Pricing <br /> Choose your Book
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
          {plans.map((plan, index) => {
            // create fwConfig inside the map so it updates with each selected plan
            const fwConfigForPlan = {
              public_key: "FLWPUBK-5d0aadff07d443f6620ebb38ae65ff7c-X",
              tx_ref: `tx-${plan.name}-${Date.now()}`,
              amount: plan.getBook, // dynamically set the amount based on the plan
              currency: "NGN",
              payment_options: "card,mobilemoney,ussd",
              customer: {
                email: "umanamfon06@gmail.com",
                phone_number: "08062****",
                name: "Mfon Umana",
              },
              customizations: {
                title: plan.name,
                description: `Payment for items in cart ${plan.name}`,
                logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
              },
              text: "Buy Now",
              callback: (response: any) => {
                if (response.status === "successful") {
                  console.log("Payment Successful", response);

                  // Find the book by title
                  const purchasedBook = books.find(
                    (book) => book.title === plan.name
                  );
                  if (purchasedBook) {
                    // Create a download link
                    const link = document.createElement("a");
                    link.href = purchasedBook.pdf;
                    link.setAttribute("download", purchasedBook.title); // set the download attribute
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                  } else {
                    console.error("Book not found");
                  }
                } else {
                  console.log("Failed Transaction", response);
                }

                closePaymentModal(); // close the Flutterwave modal programmatically
              },
              onClose: () => {
                console.log("Payment modal closed");
                // Add any additional logic you want when the modal is closed
              },
            };

            return (
              <div
                key={plan.name}
                className="h-full flex flex-col justify-between border rounded-3xl px-6"
              >
                <div className={plan.style}>
                  <div className="text-4xl flex items-center font-medium">
                    {plan.name}
                    {plan.feature === "Contact Us" && (
                      <div className="text-sm font-medium text-blue-600 bg-blue-100 px-3 flex flex-row w-28 py-1 rounded-full ml-4 items-center">
                        Contact Us
                      </div>
                    )}
                  </div>
                  <div className="text-3xl pt-6">{plan.price}</div>
                  <div className="py-6">{plan.description}</div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-lg py-2 flex space-x-2 items-center"
                      >
                        <PiCheckCircleFill
                          className={
                            plan.feature === "Contact Us"
                              ? "text-blue-400 mr-2 text-xl"
                              : "text-green-600 mr-2 text-xl"
                          }
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={plan.button}>
                  <span
                    onClick={() => setisPlan(plan)}
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    <FlutterWaveButton {...fwConfigForPlan} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
