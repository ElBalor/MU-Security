"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/mu-logo.jpg";
import Vision from "../public/vission.jpeg";
import Book from "../public/muBook.jpeg";
import MuLogo from "../public/mu-logo.jpg";
import Person from "../public/person.jpg";
import Magazine from "../public/images/design-g.webp";

const WebsiteDesign = () => {
  const [isSecurity, setIsSecurity] = useState(false);
  const [isSecurityImage, setIsSecurityImage] = useState(false);
  const [isArm, setIsArm] = useState(false);
  const [isArmImage, setIsArmImage] = useState(false);
  const [isDss, setIsDss] = useState(false);
  const [isDssImage, setIsDssImage] = useState(false);
  const [isFlag, setIsFlag] = useState(false);
  const [isFlagImage, setIsFlagImage] = useState(false);
  const [isMag, setIsMag] = useState(false);
  const [isMagImage, setIsMagImage] = useState(false);

  const HandleState = () => {
    setIsSecurity(!isSecurity);
    setIsSecurityImage(true);
  };

  const HandleStateImage = () => {
    setIsSecurityImage(!isSecurityImage);
  };

  const HandleArm = () => {
    setIsArm(!isArm);
    setIsArmImage(true);
  };
  const HandleArmImage = () => {
    setIsArmImage(!isArmImage);
  };

  const HandleDss = () => {
    setIsDss(!isDss);
    setIsDssImage(true);
  };
  const HandleDssImage = () => {
    setIsDssImage(!isDssImage);
  };

  const HandleFlag = () => {
    setIsFlag(!isFlag);
    setIsFlagImage(true);
  };

  const HandleFlagImage = () => {
    setIsFlagImage(!isFlagImage);
  };

  const HandleMagazine = () => {
    setIsMag(!isMag);
    setIsMagImage(true);
  };

  const HandleMagazineImage = () => {
    setIsMagImage(!isMagImage);
  };

  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-5xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          About <br /> MU-Security
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          An Establishment by MFon Umana who is also the CEO and Founder of
          MU-Security
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-10">
        <div className="grid gap-3">
          <div className="w-full pinkish-dark-gradient p-[1px] rounded-[20px] shadow-card ">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                width={500}
                height={500}
                priority
                className="w-24 h-24 object-cover rounded-full cursor-pointer"
                src={MuLogo}
                alt="About Mu-Security"
                onClick={() => setIsSecurity(true)}
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                MU Security
              </h3>
            </div>
          </div>
          <div className="w-full amberish-black-gradient p-[1px] rounded-[20px] shadow-card ">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                width={500}
                height={500}
                priority
                className="w-24 h-24 object-cover rounded-full cursor-pointer"
                src={Magazine}
                alt="About Mu-Security"
                onClick={() => setIsMag(true)}
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                MU Magazine
              </h3>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="w-full green-pink-gradient dark-gray-element p-[1px] rounded-[20px] shadow-card ">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                width={500}
                height={500}
                priority
                className="w-24 h-24 object-cover rounded-full cursor-pointer"
                src={Person}
                alt="About Mu-Security"
                onClick={() => setIsArm(true)}
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                MU CEO
              </h3>
            </div>
          </div>
          <div className="w-full flex md:hidden violet-gradient p-[1px] rounded-[20px] shadow-card ">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                width={500}
                height={500}
                priority
                className="w-24 h-24 object-cover rounded-full cursor-pointer"
                src={Book}
                alt="About Mu-Security"
                onClick={() => setIsFlag(true)}
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                MU Books
              </h3>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="w-full black-gradient  p-[1px] rounded-[20px] shadow-card ">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                width={500}
                height={500}
                priority
                className="w-24 h-24 object-cover rounded-full cursor-pointer"
                src={Vision}
                alt="About Mu-Security"
                onClick={() => setIsDss(true)}
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                MU Vision
              </h3>
            </div>
          </div>
          <div className="w-full hidden md:flex violet-gradient p-[1px] rounded-[20px] shadow-card ">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                width={500}
                height={500}
                priority
                className="w-24 h-24 object-cover rounded-full cursor-pointer"
                src={Book}
                alt="About Mu-Security"
                onClick={() => setIsFlag(true)}
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                MU Books
              </h3>
            </div>
          </div>
        </div>
      </div>
      {isSecurity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-red-600 to-gray-800 bg-opacity-45 w-full h-[600px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-cyan-500">
            <h1 className="text-center mt-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">
              MUU Security
            </h1>
            <p className="xl:text-xl text-xl relative z-20 text-transparent bg-clip-text bg-gradient-to-br from-gray-200  to-gray-400 font-semibold ">
              MUU-SECURITY is a versatile security firm offering comprehensive
              services across all sectors. It is led by Mfon Umana, a retired
              Deputy Director of the Department of State Services, and is based
              in Abuja. Umana asserts that the foremost challenge undermining
              our security efforts today is the widespread lack of security
              awareness and the growing deliberate apathy of citizens toward
              security personnel and agencies in Nigeria. He advocates for a
              gradual and intentional reorientation of Nigerians toward security
              matters as a solution to this issue. He believes that if this
              approach is pursued sincerely and comprehensively, it can help
              bridge the trust gap between Nigerians and the government,
              particularly with security agents and agencies.
            </p>
            <div
              onClick={() => HandleState()}
              className="relative top-4 cursor-pointer rounded-md bg-gradient-to-r from-lime-700 to-green-700  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-lime-600 shadow-lg shadow-lime-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isSecurityImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-cyan-800 to-cyan-900 bg-opacity-45 w-full h-[600px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-cyan-500">
            <Image
              src={Logo}
              alt="Wuu"
              width={300}
              height={300}
              className="fixed z-0 w-full h-[600px] xl:h-[450px] xl:w-[700px] rounded-xl"
            />

            <div
              onClick={() => HandleStateImage()}
              className="relative top-[550px] cursor-pointer rounded-md bg-gradient-to-r from-cyan-200 to-slate-400  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-cyan-600 shadow-xl shadow-red-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isArm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 bg-opacity-45 w-full h-[600px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-cyan-500">
            {/* <Image
              src={Person}
              alt="block"
              width={100}
              height={100}
              className="fixed z-0 w-full h-[600px] xl:h-[450px] xl:w-[700px] opacity-60 blur-md"
            /> */}
            <h1 className="text-center mt-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-700 ">
              Umana Mfon
            </h1>
            <p className="xl:text-xl text-xl relative z-20 text-transparent bg-clip-text bg-gradient-to-br from-gray-800 via-black to-gray-600 font-semibold ">
              Mfon Udo Umana was born on the 18th April, 1964. He hails from
              Ikot Obong-Ibekwe, Ikot Abasi Local Government Area, Akwa-Ibom
              State. He is of the parentage of Mr. Udo Moses Umana (Late) and
              Eka Udo Moses Umana (Late). He attended Saint Patrick&apos;s
              Primary School, Yaba-Lagos (1969-1975), Methodist Boy&apos;s High
              School, Oron, Akwa-Ibom State, Nigeria (1976-1981), and the
              University of Abuja (1992-1998), where he obtained the BA(Hons) in
              English Language. He holds a Master of Arts (MA) Degree in Peace
              and Development Studies from the University of Ilorin, Kwara
              State. He is currently a PhD student in Security Studies at
              Nasarawa State University, Keffi, Nasarawa State.
            </p>
            <div
              onClick={() => HandleArm()}
              className="relative top-4 cursor-pointer rounded-md bg-gradient-to-r from-cyan-400 to-cyan-600  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-cyan-600 shadow-lg shadow-cyan-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isArmImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-cyan-800 to-cyan-900 bg-opacity-45 w-full h-[600px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-cyan-500">
            <Image
              src={Person}
              alt="block"
              width={300}
              height={300}
              className="fixed z-0 w-full h-[600px] xl:h-[450px] xl:w-[700px] rounded-xl"
            />
            {/* <h1 className="text-center bottom-3 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-700 ">
              Mfon
            </h1> */}
            <div
              onClick={() => HandleArmImage()}
              className="relative top-[550px] cursor-pointer rounded-md bg-gradient-to-r from-cyan-400 to-cyan-600  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-cyan-600 shadow-lg shadow-cyan-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isDss && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-gray-600 to-slate-900 bg-opacity-45 w-full h-[520px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-white">
            <h1 className="text-center mt-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 ">
              MU Vision
            </h1>
            <p className="w-full h-full items-center justify-center mt-3 text-xl xl:text-2xl font-serif">
              It is my humble believe that all the factors negating our security
              enterprise today, the prominent amongst them is low security
              awareness and gradual intentional apathy to security
              agents/agencies by Nigerians. The way out of the quagmire is by
              gradual security awareness / reorientation of Nigerians.
              <br />
              <p className="font-serif">
                This holistically and sincerely pursued could breach the trust
                deficit between Nigerians and Government and more particularly
                with security agencies.
              </p>
            </p>
            <div
              onClick={() => HandleDss()}
              className="relative top-4 cursor-pointer rounded-md bg-gradient-to-r from-lime-400 to-green-600  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-lime-600 shadow-lg shadow-lime-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isDssImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-cyan-800 to-cyan-900 bg-opacity-45 w-full h-[520px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-white">
            <Image
              src={Vision}
              alt="block"
              width={1000}
              height={1000}
              className="fixed z-0 w-full h-[520px] xl:h-[450px] xl:w-[700px] rounded-xl"
            />
            {/* <h1 className="text-center bottom-3 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700 ">
              DSS
            </h1> */}
            <div
              onClick={() => HandleDssImage()}
              className="relative top-[500px] cursor-pointer rounded-md text-red-500 bg-gradient-to-r from-gray-600 to-slate-800  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-gray-600 shadow-lg shadow-gray-400"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isFlag && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-fuchsia-600 to-gray-800 bg-opacity-45 w-full h-[600px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-green-500">
            <h1 className="text-center mt-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-slate-300 ">
              MU Books
            </h1>
            <p className="xl:text-xl text-xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-black font-semibold ">
              Muu-Books specializes in the sales and production of security
              books, manuals, and motivational materials. Our offerings include
              comprehensive guides on various aspects of security, from personal
              safety to advanced security protocols, designed for both
              professionals and the general public. Additionally, we provide
              manuals that cover essential topics such as emergency response,
              risk management, and safety procedures. Our motivational materials
              aim to inspire and empower individuals across different fields,
              offering valuable insights and strategies for personal and
              professional growth. At Muu-Books, we are committed to providing
              high-quality resources that enhance knowledge and foster a safer
              and more motivated community
            </p>
            <div
              onClick={() => HandleFlag()}
              className="relative top-4 cursor-pointer rounded-md bg-gradient-to-r from-amber-400 to-gray-600  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-lime-600 shadow-lg shadow-purple-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isFlagImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-cyan-800 to-cyan-900 bg-opacity-45 w-full h-[520px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-amber-500">
            <Image
              src={Book}
              alt="block"
              width={600}
              height={600}
              className="fixed z-0 w-full h-[520px] xl:h-[450px] xl:w-[700px] rounded-xl"
            />
            <h1 className="text-center bottom-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-800 ">
              MU Books
            </h1>
            <div
              onClick={() => HandleFlagImage()}
              className="relative top-[500px] cursor-pointer rounded-md bg-gradient-to-r from-amber-400 to-red-600  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-lime-600 shadow-lg shadow-lime-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isMag && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-amber-500 to-red-500 bg-opacity-45 w-full h-[600px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-green-500">
            <h1 className="text-center mt-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-slate-300 ">
              MU MagaZine
            </h1>
            <p className="xl:text-xl text-xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-black font-semibold ">
              MU Security Magazine is an authoritative publication dedicated to
              the realm of security and safety. Designed for professionals,
              enthusiasts, and stakeholders, this magazine offers in-depth
              analysis, expert insights, and comprehensive coverage of the
              latest trends and developments in the security industry. From
              detailed features on advanced security technologies to practical
              guides on risk management and crime prevention, MU Security
              Magazine is a vital resource for staying informed and ahead of
              emerging threats.
            </p>
            <div
              onClick={() => HandleMagazine()}
              className="relative top-4 cursor-pointer rounded-md bg-gradient-to-r from-amber-400 to-gray-600  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-lime-600 shadow-lg shadow-purple-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
      {isMagImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-cyan-800 to-cyan-900 bg-opacity-45 w-full h-[520px] xl:h-[450px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-amber-500">
            <Image
              src={Magazine}
              alt="block"
              width={600}
              height={600}
              className="fixed z-0 w-full h-[520px] xl:h-[450px] xl:w-[700px] rounded-xl"
            />
            <h1 className="text-center bottom-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-800 ">
              MU Magazine
            </h1>
            <div
              onClick={() => HandleMagazineImage()}
              className="relative top-[500px] cursor-pointer rounded-md bg-gradient-to-r from-amber-400 to-red-600  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-lime-600 shadow-lg shadow-lime-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteDesign;
