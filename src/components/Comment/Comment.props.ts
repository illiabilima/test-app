export interface INewCommentProps {
    title: string;
    body: string;
}

export interface CommentProps extends INewCommentProps{
    id: number;
}

export interface ComponentCommentProps extends INewCommentProps {
    isNew: boolean;
    removeFromNew: () => void;
}