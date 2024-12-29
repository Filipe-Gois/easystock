"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import {
  SignUpWithPasswordCredentials,
  SupabaseClient,
} from "@supabase/supabase-js";

export async function handleLogin(_prev: unknown, formData: FormData) {
  const supabase = await createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      sucess: false,
      message: "Erro ao fazer login.",
    };
  }

  revalidatePath("/home", "layout");
  redirect("/home");
}

export async function handleSignup(_prev: unknown, formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data: SignUpWithPasswordCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data: dados } = await supabase.auth.signUp(data);

  if (error) {
    return {
      sucess: false,
      message: `Erro ao criar conta. ${error.message} ${error.status}`,
    };
  }

  await criarUsuario(
    supabase,
    dados.user?.email as string,
    formData.get("nome") as string
  );

  revalidatePath("/home", "layout");
  redirect("/home");
}

export const criarUsuario = async (
  supabase: SupabaseClient,
  email: string,
  nome: string
) => {
  const { data: usuarioBuscado } = await supabase
    .from("usuario")
    .select("id")
    .eq("email", email)
    .single();

  if (usuarioBuscado) {
    return {
      sucess: false,
      message: "Esse usuário já existe.",
    };
  }

  await supabase.from("usuario").insert([
    {
      email,
      nome,
    },
  ]);
};
