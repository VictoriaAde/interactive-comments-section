import { comments } from "../data.json";

export const Comments = () => {
  return comments.map((comment) => {
    return (
      <div key={comment.id}>
        <p>{comment.content}</p>
        <p>{comment.createdAt}</p>
      </div>
    );
  });
};
