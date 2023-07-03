import { ReactElement, useCallback } from "react";
import Comment from "../Comment/Comment";
import { ListProps } from "./List.props";

export default function List({ comments, className, newAdded, removeNew }: ListProps): ReactElement {

    console.log(newAdded);

    return (
        <ul className={className}>
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    title={comment.title}
                    body={comment.body}
                    isNew={newAdded.includes(comment.id)}
                    removeFromNew={() => removeNew(comment.id)}
                />
            ))}
        </ul>
    );
}