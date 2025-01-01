import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { LogOut, Settings, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Navbar from "../Navbar";
import Button from "@/components/buttons/Button";

type MenuMobileProps = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const buttonArr = [
    { text: "Conta", icon: Settings },
    { text: "Sair", icon: LogOut }
]

const MenuMobile = ({ isOpen, setIsOpen }: MenuMobileProps) => {
    const iconSize = 16;

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerContent className="bg-secondaryGreen text-white md:hidden">
                <DrawerHeader className="flex w-full justify-between">
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription className="hidden" />
                    <DrawerClose>
                        <X size={25} />
                    </DrawerClose>

                </DrawerHeader>
                <div>
                    <Navbar className="flex md:hidden" />
                </div>
                <DrawerFooter className="flex-row">

                    {buttonArr.map((e, i) => (<Button
                        key={i}
                        className="!bg-white !w-1/2 rounded py-2"
                        text={
                            <span className="flex gap-2 text-secondaryGreen items-center justify-center font-medium"> <e.icon size={iconSize} /> {e.text}</span>
                        }
                    />))}

                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default MenuMobile;