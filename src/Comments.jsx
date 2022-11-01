import { comments } from './data.json';
import './style.css';
import plusIcon from '../static/icon-plus.svg';
import minusIcon from '../static/icon-minus.svg';
import replyIcon from '../static/icon-reply.svg';
import Reply from './Replies';

const Comments = () => {
  return comments.map((comment) => {
    return (
      <>
        <section key={comment.id} className="p-3 bg-White rounded-md mb-4">
          <div className="flex gap-5 items-center">
            <img
              className="rounded-full"
              src="https://via.placeholder.com/35"
              // src={`../static/avatars/${comment.user.image.png}`}
              alt={comment.user.username}
            />
            <h1 className="font-semibold text-base  text-Dark_blue">
              {comment.user.username}
            </h1>
            <p className="text-sm text-Grayish_Blue">{comment.createdAt}</p>
          </div>
          <p className="text-sm my-4 text-Dark_blue">{comment.content}</p>
          <div className="flex justify-between">
            <div className="bg-Light_gray flex items-center justify-center gap-3 rounded-2xl py-2 px-4">
              <img src={plusIcon} alt="plus icon" className="cursor-pointer" />
              <span className="font-bold text-sm text-Moderate_blue">
                {comment.score}
              </span>
              <img
                src={minusIcon}
                alt="minus icon"
                className="cursor-pointer"
              />
            </div>
            <h3 className="font-bold text-sm flex items-center gap-3 cursor-pointer text-Moderate_blue">
              <img src={replyIcon} alt="reply icon" /> Reply
            </h3>
          </div>
        </section>
        {comment.replies.length > 0
          ? comment.replies.map((reply) => {
              return <Reply key={reply.id} reply={reply} />;
            })
          : null}
      </>
    );
  });
};

export default Comments;
