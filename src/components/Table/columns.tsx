"use client"
import { ProdutoComCategoria } from "@/types/produto"
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
import { Eye } from "lucide-react"

export const productColumns: ColumnDef<ProdutoComCategoria>[] = [
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
    {
        accessorKey: "ver_mais",
        header: "Ver mais",
        cell: () => <button onClick={() => { }}><Eye className="transition-all duration-300 ease-in-out group-hover:text-white hover:scale-110" /></button>,
    },

]
