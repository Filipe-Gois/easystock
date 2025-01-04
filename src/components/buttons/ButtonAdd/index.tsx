import { Plus } from "lucide-react";
import { ComponentProps } from "react";

type ButtonAddProps = ComponentProps<"button"> & {}

const ButtonAdd = ({ ...rest }: ButtonAddProps) => {
    return (
        <button className="bg-emerald-900 rounded-xl p-3 text-white w-max transition-all ease-in-out duration-300 hover:scale-110 hover:bg-emerald-500" {...rest}>
            <Plus />
        </button>
    );
};

export default ButtonAdd;