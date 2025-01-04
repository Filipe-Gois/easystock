import { Categoria } from "@/types/categoria";
import { createClient } from "@/utils/supabase/client";
import { PostgrestResponse } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getCategorias = async () => {
  const supabase = createClient();

  const { data } = (await supabase
    .from("categoria")
    .select("*")) as PostgrestResponse<Categoria>;

  return data;
};

export const useGetCategorias = () => {
  return useQuery({
    queryKey: ["getCategorias"],

    queryFn: getCategorias,
  });
};
