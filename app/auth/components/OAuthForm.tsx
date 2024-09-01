"use client";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/glogoo.png";

export default function OAuthForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const loginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <Button className="w-full" onClick={loginWithGoogle}>
      Continue With Google{" "}
      <Image
        src={Logo}
        alt="logo"
        className="w-9 h-9"
        width={200}
        height={200}
      />
    </Button>
  );
}
