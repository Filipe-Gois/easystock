import { ProdutoComCategoria } from "@/types/produto";
import { createClient } from "@/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

const selectProducts = `
    idProduto,
    idUsuario,
    created_at,
    nome,
    descricao,
    quantidade,
    preco,
    categoria (
      idCategoria,
      nome
    )`;

export const getProducts = async () => {
  const supabase = await createClient();

  return (await supabase
    .from("produtos")
    .select("*")) as PostgrestSingleResponse<ProdutoComCategoria[]>;
};
