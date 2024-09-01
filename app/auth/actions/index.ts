"use server";

import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();

  // Check if the email already exists
  const { data: existingUser, error: userCheckError } = await supabase
    .from("users")
    .select("email")
    .eq("email", data.email)
    .single();

  if (userCheckError && userCheckError.code !== "PGRST116") {
    // Handle unexpected errors (PGRST116 is the code for no match found)
    return JSON.stringify(userCheckError);
  }

  if (existingUser) {
    // If the email is already registered, return an error
    return JSON.stringify({
      error: "Email already in use. Please use a different email.",
    });
  }

  // If email is not in use, proceed with sign up

  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  if (result.error) {
    return JSON.stringify(result);
  }

  redirect("/home");
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (result.error) {
    return JSON.stringify(result);
  }

  redirect("/home");
}

export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/auth");
}
