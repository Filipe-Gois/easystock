import { Categoria } from "@/types/categoria";
import { createClient } from "@/utils/supabase/client";
import { PostgrestResponse } from "@supabase/supabase-js";

export const handleCreateProduct = (formData: FormData) => {
  alert(formData.get("categoria") as string);
};

export const getCategorias = async () => {
  const supabase = createClient();

  const { data } = (await supabase
    .from("categoria")
    .select("*")) as PostgrestResponse<Categoria>;

  return data;
};
