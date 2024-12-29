import NotFoundIcon from "@/components/Icons/NotFoundIcon";
import Link from "next/link";

const NotFound = () => {
    return (
        <section className="flex overflow-hidden flex-col w-full h-screen justify-evenly  items-center">
            <h1 className="text-center text-xl font-extrabold font-poppins md:text-6xl text-green-500">Página não encontrada!</h1>
            <button className="text-xl bg-green-500 !px-10 outline-none rounded transition-all ease-in-out duration-300 hover:scale-110 text-black h-[70px] hover:text-white">
                <Link href={"/home"}>Voltar para Home.</Link>
            </button>
            <NotFoundIcon />
        </section>
    );
};

export default NotFound;