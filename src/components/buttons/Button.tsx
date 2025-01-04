import { ComponentProps } from "react";
import { SyncLoader } from "react-spinners";

type ButtonComponentProps = ComponentProps<"button"> & {

    text: string | React.ReactNode
}

const Button = ({ text, ...props }: ButtonComponentProps) => {
    return (
        <button type="submit" className="bg-gradient-to-l from-emerald-500 to-emerald-900 text-xl rounded transition-all ease-in-out duration-300 hover:scale-105 text-white h-[70px]" {...props}>
            {!props.disabled ? text : <SyncLoader size={10} color="white" />}
        </button>
    );
};

export default Button;