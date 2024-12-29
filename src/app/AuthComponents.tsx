"use client"
import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import AuthForm from "@/components/forms/AuthForm"
import SocialAuth from "@/components/buttons/SocialAuth";
import { Separator } from "@/components/ui/separator";
import { Package } from "lucide-react";
import Image from "next/image";

type Props = {
    children: ReactNode;
    isRegister: boolean;
    setIsRegister: Dispatch<SetStateAction<boolean>>
}

export const AuthContainer = () => {

    const [isRegister, setIsRegister] = useState(false);
    return (
        <section className="relative w-full min-h-screen h-full md:h-screen flex flex-col">
            {/* Form Container */}
            <div
                className={`absolute top-0 w-full md:w-3/5 h-full px-16 py-10 transition-all duration-500 ease-in-out
                    ${isRegister ? 'md:translate-x-[66.67%]' : 'md:translate-x-0'}`}
            >
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between w-full h-max">
                    <div className="flex items-center gap-4">
                        <Package className="text-green-500" />
                        <h1 className="font-medium text-2xl">EasyStock</h1>
                    </div>

                    <NavigateAuthButton isRegister={isRegister} setIsRegister={setIsRegister} />
                </div>

                <div className="flex flex-col h-full md:justify-center items-center">
                    <AuthSubTitle isRegister={isRegister} />
                    <AuthDescription isRegister={isRegister} />

                    <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
                        <SocialAuth />
                        <SocialAuth auth="github" />
                    </div>

                    <div className="flex w-full mt-10 items-center justify-center gap-3">
                        <Separator className="!max-w-[30%] bg-gray-400" orientation="horizontal" />
                        <p className="text-center">Ou continue com</p>
                        <Separator className="!max-w-[30%] bg-gray-400" orientation="horizontal" />
                    </div>

                    <AuthForm isRegister={isRegister} />
                </div>
            </div>

            {/* Image Container */}
            <div
                className={`hidden md:block absolute top-0 w-2/5 min-h-screen h-full transition-all duration-500 ease-in-out
                    ${isRegister ? 'translate-x-0' : 'translate-x-[150%]'}`}
            >
                <div className="relative w-full h-full">
                    <Image
                        className={`w-full h-screen object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out
                            ${!isRegister ? 'opacity-0' : 'opacity-100'}`}
                        width={1000}
                        height={1000}
                        alt="Imagem de registro"
                        src="/images/registerImage.png"
                    />
                    <Image
                        className={`w-full h-screen object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out
                            ${isRegister ? 'opacity-0' : 'opacity-100'}`}
                        width={1000}
                        height={1000}
                        alt="Imagem de login"
                        src="/images/loginImage.png"
                    />
                </div>
            </div>
        </section>
    );
};

export const NavigateAuthButton = ({ isRegister, setIsRegister }: Omit<Props, "children">) => {
    const navigate = () => setIsRegister(prev => !prev);

    return (
        <span className="text-center text-sm">{!isRegister ? "Não tem uma conta ?" : "Tem uma conta ?"} <button onClick={navigate} className="underline text-green-500 transition-all ease-in-out duration-300 hover:scale-105">{!isRegister ? "Criar conta!" : "Fazer login!"}</button></span>
    )
}

export const AuthSubTitle = ({ isRegister }: Omit<Props, "children" | "setIsRegister">) => {

    return (<h2 className="font-semibold text-center text-4xl">{!isRegister ? "Bem-vindo de volta" : "Comece com o EasyStock"}</h2>);
}
export const AuthDescription = ({ isRegister }: Omit<Props, "children" | "setIsRegister">) => {

    return (<p className="text-xl mt-2 text-center">{!isRegister ? "Faça login com sua conta" : "Controle total do seu estoque em um clique!"}</p>);
}