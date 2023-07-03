import { useState, MouseEvent, ReactElement, useRef } from "react";
import { FilterProps, IAction } from "./Filter.props";

import "./Filter.css";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const actions = [
    {
        value: "all",
        label: "Всі",
    },
    {
        value: "comments",
        label: "Комментарі"
    }
];

export default function Filter({ isActive }: FilterProps): ReactElement {
    
    const listRef = useRef<HTMLDivElement>(null);

    const [selectedAction, setSelectedAction] = useState<IAction>(actions[0]);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    function openFilter(e?: MouseEvent<HTMLButtonElement>) {
        if (!isActive && e) {
            e.preventDefault();
            return;
        }
        setIsOpened(true);
    }

    function closeFilter() {
        setIsOpened(false);
    }

    function selectAction(e: MouseEvent<HTMLButtonElement>, action: IAction) {
        e.stopPropagation();
        setSelectedAction(action);
        closeFilter();
    }

    useOutsideClick(listRef, () => closeFilter());
    
    return (
        <div className="filter" ref={listRef}>
            <button className={`filter__btn ${isOpened ? "filter__btn--opened" : ""}`} onClick={openFilter}>
                {selectedAction.label}
            </button>
            {isOpened && (
                <ul className="filter__actions" >
                    {actions.map(action => (
                        <li
                            key={action.value}
                            className="filter__item"
                        >
                            <button
                                className={`filter__label ${action.value === selectedAction.value ? "filter__label--checked" : ""} `}
                                onClick={event => selectAction(event, action)}
                            >
                                <span className="filter__radio" />
                                <span>{action.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}