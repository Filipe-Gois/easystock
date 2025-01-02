import { produtctColumns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import { getProducts } from "./actions";
import GridContainer from "@/components/containers/GridContainer";
import { ProdutoComCategoria } from "@/types/produto";

const ProdutosPage = async () => {
    // const { data: produtos } = await getProducts();

    const produtos: ProdutoComCategoria[] = [
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod001",
            idusuario: "user001",
            categoria: {
                idcategoria: "cat001",
                nome: "Eletrônicos",
            },
            nome: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas e 128GB de armazenamento.",
            quantidade: 10,
            preco: 1999.99,
            created_at: new Date("2025-01-01"),
        },
        {
            idproduto: "prod002",
            idusuario: "user002",
            categoria: {
                idcategoria: "cat002",
                nome: "Livros",
            },
            nome: "Livro de TypeScript",
            descricao: "Um guia completo sobre TypeScript para desenvolvedores.",
            quantidade: 25,
            preco: 79.99,
            created_at: new Date("2024-12-15"),
        },
        {
            idproduto: "prod003",
            idusuario: "user003",
            categoria: {
                idcategoria: "cat003",
                nome: "Móveis",
            },
            nome: "Cadeira de Escritório",
            descricao: "Cadeira ergonômica com ajuste de altura e suporte para as costas.",
            quantidade: 5,
            preco: 499.99,
            created_at: new Date("2024-11-20"),
        },
    ];

    console.log(produtos);

    return (
        <section className="w-full h-full flex justify-center pb-20">
            <GridContainer>
                <DataTable data={produtos ?? []} columns={produtctColumns} />
            </GridContainer>
        </section>
    );
};

export default ProdutosPage;