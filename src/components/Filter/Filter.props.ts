export interface FilterProps {
    isActive: boolean;
    action?: (type: string) => void;
}

export interface IAction {
    value: string;
    label: string;
}