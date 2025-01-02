import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type ToolTipComponentProps = {
    text: string;
    maxLength?: number;
    triggerClassName?: string; // Para permitir estilos externos
};
const ToolTipComponent = ({ text, maxLength = 10 }: ToolTipComponentProps) => {
    const isTextoMaiorQueOEsperado = text.length > maxLength;
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {isTextoMaiorQueOEsperado
                        ? text.substring(0, maxLength) + "..."
                        : text}
                </TooltipTrigger>
                <TooltipContent className="text-black">
                    {text}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    );
};

export default ToolTipComponent;