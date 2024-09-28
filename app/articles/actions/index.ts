"use server";

import createSupabaseServerClient from "@/lib/supabase/server";

export async function createArticle(title: string, content: string) {
  const supabase = await createSupabaseServerClient();

  const result = supabase.from("article").insert({ title, content }).single();

  return JSON.stringify(result);
}

export async function readArticle() {}

export async function deleteArticleById(id: string) {}

export async function updateArticleById(id: string, completed: boolean) {}
