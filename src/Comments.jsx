import { comments } from './data.json';
import './style.css';
import plusIcon from '../static/icon-plus.svg';
import minusIcon from '../static/icon-minus.svg';
import replyIcon from '../static/icon-reply.svg';

const Comments = () => {
  return comments.map((comment) => {
    return (
      <div key={comment.id} className="p-3 bg-White rounded-md">
        <div className="flex gap-5">
          <img
            className="rounded-full"
            src="https://via.placeholder.com/30"
            // src={`../static/avatars/${comment.user.image.png}`}
            alt={comment.user.username}
          />
          <h1 className="font-semibold text-base">{comment.user.username}</h1>
          <p className="text-sm">{comment.createdAt}</p>
        </div>
        <p className="text-sm my-4">{comment.content}</p>
        <div className="flex justify-between">
          <div className="bg-Light_gray flex items-center justify-center gap-3 rounded-2xl py-2 px-4">
            <img src={plusIcon} alt="plus icon" className="cursor-pointer" />
            <span className="font-bold text-sm">{comment.score}</span>
            <img src={minusIcon} alt="minus icon" className="cursor-pointer" />
          </div>
          <h3 className="font-bold text-sm flex items-center gap-3 cursor-pointer">
            <img src={replyIcon} alt="reply icon" /> Reply
          </h3>
        </div>
      </div>
    );
  });
};

export default Comments;
