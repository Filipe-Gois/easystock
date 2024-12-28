import { ComponentProps } from "react";
import { SyncLoader } from "react-spinners";

type ButtonComponentProps = ComponentProps<"button"> & {

    text: string
}

const Button = ({ text, ...props }: ButtonComponentProps) => {
    return (
        <button className="bg-green-500 rounded transition-all ease-in-out duration-300 hover:scale-110 text-black h-[70px] hover:text-white" {...props}>
            {!props.disabled ? text : <SyncLoader size={10} color="white" />}
        </button>
    );
};

export default Button;