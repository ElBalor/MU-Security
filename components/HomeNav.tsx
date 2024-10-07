"use client";
import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaBookJournalWhills } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import Logo from "../public/mu-logo.jpg";
import Image from "next/image";
import { logout } from "../app/auth/actions";

const HomeNav = () => {
  const Logout = async () => {
    try {
      await logout();
      window.location.href = "/auth"; // Perform a client-side redirect to "/auth"
    } catch (error) {
      console.error("Error during logout", error);
    }
  };
  return (
    <nav className="w-full h-[5rem] shadow-xl shadow-cyan-600 bg-gradient-to-br from-blue-600 to-gray-600 z-20 fixed top-0 flex items-center justify-between px-4 py-2 rounded-md">
      <Link
        href="/"
        className="flex items-center rounded-full w-10 h-10 bg-slate-700"
      >
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          className="object-cover w-full rounded-full h-full"
        />
      </Link>
      <div className="flex-1 flex items-center justify-end space-x-4 md:space-x-8 lg:space-x-24">
        {/* <Link href="/" className="flex flex-col items-center">
          <div className="text-xl md:text-2xl">
            <FaHome />
          </div>
          <h1 className="text-sm md:text-base">Home</h1>
        </Link>
        <Link href="/" className="flex flex-col items-center">
          <div className="text-xl md:text-2xl">
            <FcAbout />
          </div>
          <h1 className="text-sm md:text-base">About Us</h1>
        </Link> */}
        <Link href="/book" className="flex flex-col items-center">
          <div className="text-xl md:text-2xl">
            <FaBookJournalWhills />
          </div>
          <h1 className="text-sm md:text-base">Books</h1>
        </Link>
        <Link href="/contact" className="flex flex-col items-center">
          <div className="text-xl md:text-2xl">
            <MdContactPhone />
          </div>
          <h1 className="text-sm md:text-base">Contact</h1>
        </Link>
        <button
          onClick={Logout}
          className="rounded-md bg-blue-400 p-1 w-16 h-14 hover:bg-slate-500 hover:scale-90 hover:duration-500 duration-500 ease-in-out"
        >
          SignOut
        </button>
      </div>
    </nav>
  );
};

export default HomeNav;
