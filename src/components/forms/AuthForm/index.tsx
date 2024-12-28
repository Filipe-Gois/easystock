"use client"
import Form from "next/form"
import { handleLogin } from "./actions";
import Input from "@/components/inputs";
import Button from "@/components/buttons/Button";
import { usePathname } from "next/navigation";

const AuthForm = () => {
    const pathname = usePathname();
    const isRegister = pathname.includes("register");
    return (
        <Form className="w-full md:w-full flex flex-col gap-5 mt-10" action={handleLogin} >

            {isRegister && <Input type="text" placeholder="Informe seu nome" />}
            <Input type="email" placeholder="E-mail" />
            <Input isPassword type="password" placeholder="Senha" />
            {isRegister &&
                <Input isPassword type="password" placeholder="Confirme sua senha" />
            }

            <Button type="submit" text={!isRegister ? "Logar" : "Criar conta"} />
        </Form>
    );
};

export default AuthForm;