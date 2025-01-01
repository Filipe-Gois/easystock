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
  idProduto: string;
  idUsuario: string;
  categoria: Categoria;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  created_at: Date;
};
