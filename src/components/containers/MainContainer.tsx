"use client"
import { usePathname } from "next/navigation";
import { ContainersProps } from ".";

const MainContainer = ({ children }: ContainersProps) => {
    const pathname = usePathname()
    const rotasComHeader: string[] = ["/produtos", "/categorias", "/usuarios", "/perfil"];

    return (
        <main key={pathname} className={`initial animate ${rotasComHeader.includes(pathname) ? "pt-40" : ""}`}>
            {children}
        </main>
    );
};

export default MainContainer;