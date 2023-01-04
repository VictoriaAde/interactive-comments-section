import { comments } from './data.json';
import './style.css';
// import plusIcon from '../static/icon-plus.svg';
// import minusIcon from '../static/icon-minus.svg';
import replyIcon from '../static/icon-reply.svg';
import Reply from './Replies';
import CurrentUser from './CurrentUser';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter';

const Comments = () => {
  const { commentScore } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const addComment = (text, id) => {};

  return (
    <>
      {comments.map((comment) => (
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
              <button onClick={() => dispatch(increment())}>
                {' '}
                <svg
                  className="w-3 h-3 fill-icon_color hover:fill-Moderate_blue cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                </svg>
              </button>

              <span className="font-bold text-sm text-Moderate_blue">
                {comment.score}
              </span>

              <button onClick={() => dispatch(decrement())}>
                <svg
                  className="w-3 h-2 fill-icon_color hover:fill-Moderate_blue cursor-pointer "
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                </svg>
              </button>
            </div>

            <h3 className="font-bold text-sm flex items-center gap-3 cursor-pointer text-Moderate_blue hover:text-Light_grayish_blue">
              <img src={replyIcon} alt="reply icon" /> Reply
            </h3>
          </div>
          <CurrentUser submitLabel="Write" handleSubmit={addComment} />
          {comment.replies.length > 0
            ? comment.replies.map((reply) => {
                return <Reply key={reply.id} reply={reply} />;
              })
            : null}
        </section>
      ))}
    </>
  );
};

export default Comments;
