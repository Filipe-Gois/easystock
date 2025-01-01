import { Package } from "lucide-react"
import Navbar from "./Navbar";
import SwitchMenuMobile from "./SwitchMenuMobile";
import SelectActions from "./SelectActions";
import { createClient } from "@/utils/supabase/server";
import { Usuario } from "@/types/usuario";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

const Header = async () => {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser();
    console.log(data)
    const email = data.user?.email;
    const { data: usuario } = await supabase.from("usuario").select("*").eq("email", email).single() as PostgrestSingleResponse<Usuario>;

    return (
        <header className="z-50 select-none w-full h-28 px-5 md:px-10 rounded-b-3xl bg-secondaryGreen text-white flex justify-between items-center !top-0 !fixed">
            <div className="flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110">
                <Package />
                <h1 className="font-medium text-2xl">EasyStock</h1>
            </div>
            <Navbar className="hidden md:flex" />
            <SwitchMenuMobile />

            <div className="hidden md:flex items-center gap-5">
                <span className="hidden md:flex">Olá, {usuario?.nome}.</span>
                <SelectActions imageUrl={usuario?.profilePicture} />
            </div>

        </header>
    );
};

export default Header; 