import { Package } from "lucide-react";
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

const Header = () => {
    return (
        <SidebarHeader className="bg-green-800">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton className="!bg-transparent outline-none">
                        <Package size={100} className="w-32 h-32 text-white" />
                        <h1 className="font-medium text-2xl text-white">EasyStock</h1>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    );
};

export default Header;