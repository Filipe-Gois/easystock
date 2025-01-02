"use client"
import { usePathname } from "next/navigation";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const rotasComHeader: string[] = ["/produtos", "/categorias", "/usuarios", "/perfil"];

    return (
        <main key={pathname} className={`initial animate ${rotasComHeader.includes(pathname) ? "pt-28" : ""}`}>
            {children}
        </main>
    );
};

export default MainContainer;