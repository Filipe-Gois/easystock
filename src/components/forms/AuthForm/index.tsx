"use client"
import Form from "next/form"
import { handleLogin, handleSignup } from "./actions";
import Input from "@/components/inputs";
import Button from "@/components/buttons/Button";
import { usePathname } from "next/navigation";
import { useActionState } from "react"

const AuthForm = () => {
    const pathname = usePathname();
    const isRegister = pathname.includes("register");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loginReturn, loginAction, isPendingLogin] = useActionState(handleLogin, null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [signupReturn, signupAction, isPendingSignup] = useActionState(handleSignup, null)
    return (
        <Form className="w-full md:w-full flex flex-col gap-5 mt-10" action={!isRegister ? loginAction : signupAction} >

            {isRegister && <Input type="text" name="name" placeholder="Informe seu nome" />}
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" isPassword type="password" placeholder="Senha" />
            {isRegister &&
                <Input name="confirm-password" isPassword type="password" placeholder="Confirme sua senha" />
            }

            <Button disabled={isPendingLogin || isPendingSignup} type="submit" text={!isRegister ? "Logar" : "Criar conta"} />
            <p className="text-red-900">{loginReturn?.message || signupReturn?.message}</p>
        </Form>
    );
};

export default AuthForm;