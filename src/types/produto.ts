import { Categoria } from "./categoria";

export type Produto = {
  idProduto: string;
  created_at: string;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  idCategoria: string;
  idUsuario: string;
};

export type ProdutoComCategoria = {
  idproduto: string;
  idusuario: string;
  categoria: Categoria;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  created_at: string;
};
