"use client"
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";


type SelectActionsProps = {
    imageUrl?: string
}

const SelectActions = ({ imageUrl }: SelectActionsProps) => {
    const supabase = createClient();
    const { push, replace } = useRouter();

    const handleLogout = () => {
        supabase.auth.signOut();
        replace("/");
    }

    const goToProfilePage = () => {
        push("perfil");
    }

    const itens = [
        { text: "Conta", icon: Settings, function: goToProfilePage },
        { text: "Sair", icon: LogOut, function: handleLogout },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hidden md:flex">
                <Image className="w-14 rounded-lg" width={1000} height={1000} src={imageUrl ?? "/images/not-found.png"} alt="Imagem do usuário logado." />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-backgroundColor">
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {itens.map((e, i) => (
                    <DropdownMenuItem onClick={e.function} key={i}> <e.icon /> {e.text}</DropdownMenuItem>
                ))}

            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SelectActions;