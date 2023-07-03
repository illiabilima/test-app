import { NewCommentProps } from "./NewCommentProps";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react";

import "./NewComment.css";

export default function NewComment({ onSubmit, className }: NewCommentProps): ReactElement {

    const [comment, setComment] = useState<string>("");

    function submitForm(e: FormEvent) {
        e.preventDefault();
        onSubmit(comment);
        setComment("");
    }

    return (
        <form
            onSubmit={submitForm}
            className={`comment-form ${className || ""}`}
        >
            <input
                className="rounded comment-form__input border px-4 py-2"
                type="text"
                placeholder="Додайте коментар"
                value={comment}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setComment(event.target.value)}
            />
            <button className="rounded comment-form__btn px-4 py-2" type="submit">Додати</button>
        </form>
    );
}