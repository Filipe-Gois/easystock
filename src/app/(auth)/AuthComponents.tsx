"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

type Props = { children: ReactNode }

export const AuthContainer = ({ children }: Props) => {
    const pathname = usePathname();
    const isRegister = pathname.includes("register");
    return (
        <section className={`w-full h-full flex ${isRegister ? "flex-row-reverse" : ""}`}>
            {children}
        </section>
    );
};

export const NavigateAuthButton = () => {
    const pathname = usePathname();
    const isRegister = pathname.includes("register");
    const { push } = useRouter()

    const navigate = () => push(isRegister ? "/login" : "/register")

    return (
        <span className="text-center text-sm">{!isRegister ? "Não tem uma conta ?" : "Tem uma conta ?"} <button onClick={navigate} className="underline text-green-500 transition-all ease-in-out duration-300 hover:scale-105">{!isRegister ? "Criar conta!" : "Fazer login!"}</button></span>
    )
}

export const AuthSubTitle = () => {
    const pathname = usePathname();
    const isRegister = pathname.includes("register");
    return (<h2 className="font-semibold text-center text-4xl">{!isRegister ? "Bem-vindo de volta" : "Comece com o EasyStock"}</h2>);
}
export const AuthDescription = () => {
    const pathname = usePathname();
    const isRegister = pathname.includes("register");
    return (<p className="text-xl mt-2 text-center">{!isRegister ? "Faça login com sua conta" : "Controle total do seu estoque em um clique!"}</p>);
}