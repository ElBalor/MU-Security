import React from "react";
import { AuthForm } from "./components/AuthForm";
import readUserSession from "@/lib/action";
import { redirect } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";

export default async function page() {
  const { data } = await readUserSession();
  if (data.user) {
    return redirect("/home");
  } else {
    <div>
      <h1>Error 307</h1>
    </div>;
  }

  return (
    <>
      <div className=" h-full w-full flex items-center justify-center flex-col mt-3 ">
        <Image
          src="/flowerr.png"
          alt="bg2"
          width={300}
          height={300}
          className=" xl:w-96 xl:left-5 xl:bottom-3 -left-24 -bottom-10 rotate-90 fixed"
        />
        <Image
          src="/background.png"
          className=" w-full xl:w-96 -top-11 xl:top-0 -z-10 fixed"
          alt="Bg"
          width={300}
          height={300}
        />
        <h1 className="items-center justify-center text-center w-full text-5xl font-semibold fixed top-16 text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-blue-300 to-cyan-500">
          <span className="text-6xl">M</span>u-Security
        </h1>
        <div className="flex justify-center items-center h-screen mt-10 ">
          <div className="w-96 fixed">
            <AuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
