"use client"
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
    trigger: React.ReactNode
}

const SelectActions = ({ trigger }: SelectActionsProps) => {
    const supabase = createClient();
    const { push, replace } = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
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
            <DropdownMenuTrigger className="hidden md:flex">{trigger}</DropdownMenuTrigger>
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