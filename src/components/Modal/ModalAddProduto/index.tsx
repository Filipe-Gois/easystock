import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ModalProps } from "..";
import Form from "next/form";
import { getCategorias, handleCreateProduct } from "./actions";
import Button from "@/components/buttons/Button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useGetCategorias } from "@/hooks/categoria/useGetCategorias";
import { Input } from "@/components/ui/input";

const inputs = [

    {
        name: "nome",
        type: "text",
        placeholder: "Nome"
    },
    {
        name: "preco",
        type: "number",
        placeholder: "Preço"
    },
    {
        name: "quantidade",
        type: "number",
        placeholder: "Quantidade"
    },


];
<input type="number" />

const ModalAddProduto = ({ onOpenChange, open }: ModalProps) => {

    const { data: categorias } = useGetCategorias()

    return (
        <Dialog onOpenChange={onOpenChange} open={open}>
            <DialogContent className="h-4/6">
                <DialogHeader className="!h-max">
                    <DialogTitle className="text-emerald-900 !h-max text-center font-bold text-2xl">Cadastre um produto.</DialogTitle>
                    <DialogDescription className="hidden" />
                </DialogHeader>

                <Form className="w-full !h-full flex flex-col" action={handleCreateProduct}>

                    <div className="flex">

                        <div className="w-1/2">

                            {inputs.map((input) => (<Input key={input.name} type={input.type} name={input.name} placeholder={input.placeholder} className="h-10" />))}

                        </div>

                        <div className="w-1/2 flex flex-col items-end">

                            <Select name="categoria">
                                <SelectTrigger className="w-[180px] bg-emerald-500 text-white">
                                    <SelectValue placeholder="Categorias" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        categorias?.map(c => <SelectItem key={c.idcategoria} value={c.idcategoria}>{c.nome}</SelectItem>)
                                    }
                                </SelectContent>
                            </Select>
                            <textarea name="" className="!w-full h-full bg-red-900" id=""></textarea>
                        </div>

                    </div>
                    <Button text="Cadastrar" />
                </Form>


            </DialogContent>
        </Dialog>

    );
};

export default ModalAddProduto;