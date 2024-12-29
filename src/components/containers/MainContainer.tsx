"use client"
import { usePathname } from "next/navigation";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    return (
        <main key={pathname} className="initial animate">
            {children}
        </main>
    );
};

export default MainContainer;