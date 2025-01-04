import { ProdutoComCategoria } from "@/types/produto";
import { createClient } from "@/utils/supabase/client";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const selectProducts = `
    idproduto,
    idusuario,
    created_at,
    nome,
    descricao,
    quantidade,
    preco,
    categoria (
      idcategoria,
      nome
    )`;

const getProducts = async () => {
  const supabase = createClient();

  const { data } = (await supabase
    .from("produto")
    .select(selectProducts)) as PostgrestSingleResponse<ProdutoComCategoria[]>;

  return (
    data?.map((p) => ({
      ...p,
      created_at: moment(p.created_at).format("DD/MM/YYYY"),
    })) || []
  );
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
