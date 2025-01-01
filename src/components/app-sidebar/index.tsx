import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Bell, ShoppingBag, Tags, Users } from "lucide-react"
import Footer from "./Footer"
import Header from "./Header"
import { Separator } from "../ui/separator"
import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"

const items = [
    {
        title: "Produtos",
        url: "/produtos",
        icon: ShoppingBag,
    },
    {
        title: "Categorias",
        url: "/categorias",
        icon: Tags,
    },
    {
        title: "Usuários",
        url: "/usuarios",
        icon: Users,
    },
    {
        title: "Notificações",
        url: "",
        icon: Bell,
    },
]

export function AppSidebar() {
    return (

        <Sidebar className="text-white" collapsible="icon">
            <Header />
            <SidebarContent className="bg-green-800 h-full flex flex-col !justify-center">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem className="" key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon className="" />
                                            <span className="!text-xl">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <div className="px-4 bg-green-800">
                <Separator />
            </div>
            <Footer nome="Filipe Góis" />
        </Sidebar>

    )
}
