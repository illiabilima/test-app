import { TabProps } from "./Tab.props";
import { ReactElement } from "react";

import "./Tab.css";

export default function Tab({ name, title, isActive, setIsActive, extra }: TabProps): ReactElement {
    return (
        <div
            className={`px-8 py-2.5 tab ${isActive ? "tab--active" : ""}`}
            onClick={() => setIsActive(name)}
        >
            <span>
                {title}
            </span>
            {extra}
        </div>
    );
}
