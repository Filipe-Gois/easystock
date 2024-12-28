import { ComponentProps } from "react";

type ButtonComponentProps = ComponentProps<"button"> & {

    text: string
}

const Button = ({ text, ...props }: ButtonComponentProps) => {
    return (
        <button className="bg-green-500 rounded transition-all ease-in-out duration-300 hover:scale-110 text-black h-[70px] hover:text-white" {...props}>
            {text}
        </button>
    );
};

export default Button;