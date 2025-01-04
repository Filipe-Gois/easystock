import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>
}