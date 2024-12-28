import AuthForm from "@/components/forms/AuthForm"
import SocialAuth from "@/components/buttons/SocialAuth";
import { Separator } from "@/components/ui/separator";
import { Package } from "lucide-react";
import Image from "next/image";
import { AuthContainer, AuthDescription, AuthSubTitle, NavigateAuthButton } from "../AuthComponents";

const RegisterPage = () => {
    return (
        <AuthContainer>
            <div className="h-full md:h-screen w-full md:w-3/5 px-16 py-10">

                <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between w-full h-max">
                    <div className="flex items-center gap-4">
                        <Package className="text-green-500" />
                        <h1 className="font-medium text-2xl">EasyStock</h1>
                    </div>

                    <NavigateAuthButton />
                </div>

                <div className="flex flex-col h-full justify-center items-center">
                    <AuthSubTitle />
                    <AuthDescription />

                    <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
                        <SocialAuth />
                        <SocialAuth auth="github" />
                    </div>

                    <div className="flex w-full mt-10 items-center justify-center gap-3">

                        <Separator className="!max-w-[30%] bg-gray-400" orientation="horizontal" />
                        <p className="text-center">Ou continue com</p>
                        <Separator className="!max-w-[30%] bg-gray-400" orientation="horizontal" />
                    </div>

                    <AuthForm />

                </div>

            </div>

            <div className="hidden md:flex w-2/5 h-full animate-slide-in-left">
                <Image className="w-full h-screen" width={1000} height={1000} alt="Imagem." src={"/images/registerImage.png"} />
            </div>



        </AuthContainer >
    )
};

export default RegisterPage;