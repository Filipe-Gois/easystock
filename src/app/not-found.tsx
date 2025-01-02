import NotFoundIcon from "@/components/Icons/NotFoundIcon";
import Link from "next/link";

const NotFound = () => {
    return (
        <section className="flex overflow-hidden flex-col w-full h-screen justify-evenly  items-center">
            <h1 className="text-center text-xl font-extrabold font-poppins md:text-6xl text-emerald-900">Página não encontrada!</h1>
            <button className="text-xl bg-emerald-500 !px-10 outline-none rounded transition-all ease-in-out duration-300 hover:scale-110 text-white h-[70px]">
                <Link href={"/produtos"}>Voltar para Home.</Link>
            </button>
            <NotFoundIcon />
        </section>
    );
};

export default NotFound;