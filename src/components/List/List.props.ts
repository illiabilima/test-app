import { CommentProps } from "../Comment/Comment.props";

export interface ListProps {
    comments: CommentProps[];
    className?: string;
    newAdded: number[];
    removeNew: (id: number) => void;
}