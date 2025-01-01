"use client"
import { ProdutoComCategoria } from "@/types/produto"
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"

export const produtctColumns: ColumnDef<ProdutoComCategoria>[] = [
    {
        accessorKey: "nome",
        header: "Nome",
    },
    {
        accessorKey: "descricao",
        header: "Descrição",
    },
    {
        accessorKey: "preco",
        header: "Preço",
    },

    {
        accessorKey: "created_at",
        header: "Criado em",
        cell: ({ row }) => moment(row.original.created_at).format("DD/MM/YYYY"),
    },
    {
        accessorKey: "categoria.nome",
        header: "Categoria",
    },

]
