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

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      success: false,
      message: "Erro ao fazer login.",
    };
  }

  // Revalida a página /produtos para garantir que os dados estejam atualizados
  revalidatePath("/produtos", "layout");

  // Agora, redireciona para /produtos após o login
  redirect("/produtos");
}

export async function handleSignup(_prev: unknown, formData: FormData) {
  const supabase = await createClient();

  const data: SignUpWithPasswordCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        nome: formData.get("nome") as string,
      },
    },
  };

  const { error, data: dados } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error.stack);
    return {
      success: false,
      message: `Erro ao criar conta. ${error.message} ${error.name} ${error.status}`,
    };
  }

  await criarUsuario(
    supabase,
    dados.user?.email as string,
    formData.get("nome") as string
  );

  // Revalida a página /produtos após o cadastro
  revalidatePath("/produtos", "layout");

  // Redireciona para /produtos após o registro
  redirect("/produtos");
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
      success: false,
      message: "Esse usuário já existe.",
    };
  }

  await supabase.from("usuario").insert([
    {
      nome,
    },
  ]);
};
