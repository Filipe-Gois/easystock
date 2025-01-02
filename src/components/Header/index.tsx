"use client"
import { Package } from "lucide-react"
import Navbar from "./Navbar";
import SwitchMenuMobile from "./SwitchMenuMobile";
import SelectActions from "./SelectActions";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { UsuarioAuth } from "@/types/usuario";
import { UserMetadata as SupabaseUserMetadata } from "@supabase/supabase-js";
import Image from "next/image";
export interface UserMetadata extends SupabaseUserMetadata {
    user_metadata: UsuarioAuth;
}

const Header = () => {
    const pathname = usePathname();
    const supabase = createClient();
    const rotasComHeader: string[] = ["/produtos", "/categorias", "/usuarios", "/perfil"];
    const [usuario, setUsuario] = useState<UsuarioAuth | undefined>(undefined);
    const nome = usuario?.full_name
    const profilePicture = usuario?.picture ?? usuario?.avatar_url;

    const buscarUsuario = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const userMetadata: UsuarioAuth = {
                avatar_url: user.user_metadata.avatar_url,
                email: user.user_metadata.email,
                email_verified: user.user_metadata.email_verified,
                full_name: user.user_metadata.full_name,
                iss: user.user_metadata.iss,
                name: user.user_metadata.name,
                phone_verified: user.user_metadata.phone_verified,
                picture: user.user_metadata.picture,
                preferred_username: user.user_metadata.preferred_username,
                provider_id: user.user_metadata.provider_id,
                sub: user.user_metadata.sub,
                user_name: user.user_metadata.user_name,
            };
            setUsuario(userMetadata);
        }
    };

    useEffect(() => {

        if (!usuario) {
            buscarUsuario();
        }
        if (usuario)
            console.log("usuario", usuario)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuario]);

    if (!rotasComHeader.includes(pathname)) {
        return null;
    }



    return (
        <header className="z-50 select-none w-full h-28 px-5 md:px-10 rounded-b-3xl bg-secondaryGreen text-white flex justify-between items-center top-0 fixed">
            <div className="flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110">
                <Package />
                <h1 className="font-medium text-2xl">EasyStock</h1>
            </div>
            <Navbar className="hidden md:flex" />
            <SwitchMenuMobile />

            <SelectActions trigger={
                <div className="hidden md:flex items-center gap-5">
                    <span className="hidden md:flex">{nome ? `Olá, ${nome}.` : ""}</span>

                    <Image className="w-14 rounded-lg" width={1000} height={1000} src={profilePicture ?? "/images/not-found.png"} alt="Imagem do usuário logado." />
                </div>
            } />

        </header>
    );
};

export default Header;