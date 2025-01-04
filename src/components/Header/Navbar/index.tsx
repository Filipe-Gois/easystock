import Link from "next/link";

type NavbarItens = {
    name: string;
    link: string
}

const itens: NavbarItens[] = [

    {
        link: "/categorias",
        name: "Categorias"
    },
    {
        link: "/produtos",
        name: "Produtos"
    },
    {
        link: "/usuarios",
        name: "Usuários"
    },
]

const Navbar = ({ className = "" }: { className?: string }) => {

    return (
        <nav className={`${className} h-full w-full md:w-max bg-transparent`}>
            <ul className="h-full w-full gap-3 flex flex-col md:flex-row">

                {itens.map((item, index) => (
                    <li className="cursor-pointer md:h-full flex px-7" key={index}>
                        <Link className="flex items-center gap-2 border-b-2 md:border-none outline-none w-full h-full py-4 after:w-0 after:h-1 after:bg-white relative after:absolute after:bottom-10 after:left-0 md:hover:after:w-full after:transition-all after:ease-in-out after:duration-700 hover:after:w-0" href={item.link}>{item.name}</Link>
                    </li>
                ))}

            </ul>

        </nav>
    );
};

export default Navbar;