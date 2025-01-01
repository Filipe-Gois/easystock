"use client"
import { ChevronsUpDown, LogOut, Settings, User2 } from "lucide-react";
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type FooterProps = {
    nome: string
}

const Footer = ({ nome }: FooterProps) => {
    const iconSize = 16;
    const { replace } = useRouter()
    const supabase = createClient();

    const logout = async () => {
        await supabase.auth.signOut();

        replace("/");
    }

    return (
        <SidebarFooter className="bg-green-800">
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                                <User2 /> {nome}
                                <ChevronsUpDown className="ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            className="w-[--radix-popper-anchor-width]"
                        >
                            <DropdownMenuItem>
                                <span className="flex gap-2"> <Settings size={iconSize} /> Conta</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={logout}>
                                <span className="flex gap-2"> <LogOut className="flex items-center w-full h-full" size={iconSize} /> Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    );
};

export default Footer;