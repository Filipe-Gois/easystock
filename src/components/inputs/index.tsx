"use client";
import { ComponentProps, useState } from "react";
import { Input as InputShad } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

type InputProps = ComponentProps<"input"> & {
    isPassword?: boolean;
};

const Input = ({ isPassword = false, ...rest }: InputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="relative w-full">
            {/* Input */}
            <InputShad
                {...rest}
                type={isPassword ? (isPasswordVisible ? "text" : "password") : rest.type}
                className="bg-white w-full h-[70px] pr-12 transition-all ease-in-out duration-100 focus:border-green-100" // Espaço para o ícone
            />

            {/* Ícone dentro do input */}
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                    {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
            )}
        </div>
    );
};

export default Input;
