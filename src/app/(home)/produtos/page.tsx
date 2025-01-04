"use client"
import { productColumns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import GridContainer from "@/components/containers/GridContainer";
import ButtonAdd from "@/components/buttons/ButtonAdd";
import ModalAddProduto from "@/components/Modal/ModalAddProduto";
import { useState } from "react";
import { useGetProducts } from "@/hooks/produto/getProducts";

const ProdutosPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: produtos, isLoading } = useGetProducts();

    const abrirModalCadastrarProduto = () => setIsOpen(prev => !prev);

    return (
        <section className="w-full h-full flex justify-center pb-20">
            <GridContainer className="flex flex-col gap-5">
                <div className="flex w-full h-max justify-end">
                    <ButtonAdd onClick={abrirModalCadastrarProduto} />
                </div>
                <DataTable data={produtos ?? []} columns={productColumns} isLoading={isLoading} />
            </GridContainer>

            <ModalAddProduto onOpenChange={setIsOpen} open={isOpen} />
        </section>
    );
};

export default ProdutosPage;