import axios from "axios";
import { INewCommentProps } from "../components/Comment/Comment.props";

export async function getComments() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=4");
    return data;
}
export async function postComment(comment: INewCommentProps) {
    const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts", { id: 202, ...comment });
    return data;
}