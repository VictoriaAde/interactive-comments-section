import { comments } from './data.json';

const Replies = () => {
  return comments.replies.map((reply) => {
    console.log(reply);

    return (
      <div key={reply.replies.id} className="p-3 bg-White rounded-md">
        <div className="flex gap-5">
          <img
            className="rounded-full"
            src="https://via.placeholder.com/30"
            // src={`../static/avatars/${reply.user.image.png}`}
            alt={reply.replies.user.username}
          />
          <h1 className="font-semibold text-base">
            {reply.replies.user.username}
          </h1>
          <p className="text-sm">{reply.replies.createdAt}</p>
        </div>
      </div>
    );
  });
};

export default Replies;
