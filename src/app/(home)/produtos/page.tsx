import { produtctColumns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import { getProducts } from "./actions";

const ProdutosPage = async () => {
    const { data: produtos } = await getProducts();

    console.log("first", produtos)

    return (
        <section className="w-full h-[20000px]">
            <DataTable data={produtos ?? []} columns={produtctColumns} />
        </section>
    );
};

export default ProdutosPage;