import { ComponentCommentProps } from "./Comment.props";
import { ReactElement, useEffect } from "react";
import "./Comment.css";

export default function Comment({ title, body, isNew, removeFromNew }: ComponentCommentProps): ReactElement {
    
    useEffect(() => {
        if (isNew) {
            setTimeout(() => removeFromNew(), 1000);
        }
    }, [isNew, removeFromNew]);
    
    return (
        <li className={`px-8 py-5 comment ${isNew ? "comment--new" : ""}`}>
            <h3 className="font-semibold pb-8px">{title}</h3>
            <p>{body}</p>
        </li>
    );
}