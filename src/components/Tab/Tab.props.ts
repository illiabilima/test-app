import { ReactElement, ReactNode } from "react";

export interface TabProps {
    name: string;
    title: string;
    isActive: boolean;
    setIsActive: (type: string) => void;
    extra?: ReactElement;
}