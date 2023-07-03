import "./Events.css";
import { ReactElement, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getComments, postComment } from "../../api";
import List from "../../components/List/List";
import NewComment from "../../components/NewComment/NewComment";
import { CommentProps } from "../../components/Comment/Comment.props";

export default function Events(): ReactElement {
    const [newlyAdded, setNewlyAdded] = useState<number[]>([]);

    const clientQuery = useQueryClient();

    const { data, isLoading } = useQuery({
        queryFn: () => getComments(),
        queryKey: "comments",
        select: (data): CommentProps[] => data.map(( comment: CommentProps ) => ({
            id: comment.id,
            title: comment.title,
            body: comment.body,
        })),
        staleTime: 30 * 1000
    });

    const { mutate: createComment } = useMutation({
        mutationFn: postComment,
        onSuccess: (data: CommentProps) => {
            const uniqId = Date.now();
            clientQuery.setQueryData<CommentProps[] | undefined>(
                "comments",
                (prev) => prev ? (
                    [
                        {
                            id: uniqId,
                            title: data.title,
                            body: data.body,
                        },
                        ...prev,
                    ]
                ) : prev
            );
            setNewlyAdded(prevState => [...prevState, uniqId]);
        }
    });

    function removeFromNew(id: number) {
        setNewlyAdded(prevState => prevState.filter(item => item !== id));
    }

    return (
        <div className="events">
            {isLoading ? <div className="flex-grow">Loading...</div> : (
                <>
                    {data && (
                        <List
                            className="flex-grow overflow-y-auto"
                            comments={data}
                            newAdded={newlyAdded}
                            removeNew={(id) => removeFromNew(id)}
                        />
                    )}
                </>
            )}
            <NewComment
                className="flex-shrink-0"
                onSubmit={(message) => {
                    createComment({
                        title: new Date().toDateString(),
                        body: message,
                    });
                }} />
        </div>
    );
}