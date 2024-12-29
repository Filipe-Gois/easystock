"use client"
import { createClient } from "@/utils/supabase/client";
import { FaGithub } from "react-icons/fa";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

type SocialAuthProps = {
    auth?: Provider
}

const SocialAuth = ({ auth = "google" }: SocialAuthProps) => {

    const supabase = createClient();
    const { replace } = useRouter()

    // const verificarUsuarioExistente = async (email: string) => {
    //     const { data, error } = await supabase
    //         .from('usuario')
    //         .select('id')
    //         .eq('email', email)
    //         .single();

    //     if (error) {
    //         return false
    //     }

    //     return data ? true : false;
    // };


    const socialSigin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: auth,
        });

        if (error) {
            return {
                sucess: false,
                message: `Erro ao fazer login com ${auth}.`
            }
        };
        replace("/home");

        // const user = await supabase.auth.getUser();

        // if (!user.data) {
        //     return {
        //         sucess: false,
        //         message: `Erro ao fazer login com ${auth}.`
        //     }
        // }


        // const email = user.data.user?.email ?? "";
        // const nome = email.split("@")[0];

        // const existeUsuario = verificarUsuarioExistente(email);



    };

    return (
        <button onClick={socialSigin} className="min-w-48 transition-all duration-300 ease-in-out hover:scale-110 flex justify-center items-center gap-4 bg-white border-2 rounded py-2 px-6">
            {auth !== "google" ? <>
                <FaGithub size={22} className="text-black" />Github</> :
                <>
                    <GoogleIconComponent />
                    Google
                </>
            }
        </button>
    );
};

export default SocialAuth;

const GoogleIconComponent = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_19)">
                <path d="M21.1696 9.08742L12.196 9.08699C11.7997 9.08699 11.4785 9.40814 11.4785 9.8044V12.6711C11.4785 13.0672 11.7997 13.3885 12.1959 13.3885H17.2493C16.696 14.8245 15.6632 16.0272 14.3455 16.7913L16.5002 20.5214C19.9567 18.5224 22.0002 15.0149 22.0002 11.0885C22.0002 10.5294 21.959 10.1298 21.8766 9.67974C21.814 9.33784 21.5171 9.08742 21.1696 9.08742Z" fill="#167EE6" />
                <path d="M11.0002 17.6956C8.52714 17.6956 6.36822 16.3445 5.2087 14.345L1.47876 16.4949C3.3769 19.7847 6.93274 22 11.0002 22C12.9955 22 14.8783 21.4628 16.5002 20.5265V20.5214L14.3454 16.7913C13.3598 17.3629 12.2192 17.6956 11.0002 17.6956Z" fill="#12B347" />
                <path d="M16.5 20.5265V20.5214L14.3452 16.7913C13.3596 17.3629 12.2192 17.6957 11 17.6957V22C12.9953 22 14.8782 21.4628 16.5 20.5265Z" fill="#0F993E" />
                <path d="M4.30435 11C4.30435 9.78102 4.63702 8.64058 5.20854 7.65501L1.4786 5.50511C0.537195 7.1219 0 8.99955 0 11C0 13.0005 0.537195 14.8781 1.4786 16.4949L5.20854 14.345C4.63702 13.3594 4.30435 12.219 4.30435 11Z" fill="#FFD500" />
                <path d="M11.0002 4.30435C12.6128 4.30435 14.0941 4.87738 15.2511 5.83056C15.5366 6.06568 15.9515 6.04871 16.2129 5.78725L18.244 3.75611C18.5407 3.45946 18.5196 2.97387 18.2027 2.69895C16.2641 1.0172 13.7419 0 11.0002 0C6.93274 0 3.3769 2.21534 1.47876 5.50511L5.2087 7.65501C6.36822 5.65555 8.52714 4.30435 11.0002 4.30435Z" fill="#FF4B26" />
                <path d="M15.251 5.83056C15.5364 6.06568 15.9513 6.04871 16.2128 5.78725L18.2439 3.75611C18.5405 3.45946 18.5194 2.97387 18.2025 2.69895C16.264 1.01716 13.7417 0 11 0V4.30435C12.6126 4.30435 14.094 4.87738 15.251 5.83056Z" fill="#D93F21" />
            </g>
            <defs>
                <clipPath id="clip0_2_19">
                    <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};
