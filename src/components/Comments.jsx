import { comments } from '../data.json';

import React from 'react';

const Comments = () => {
  return comments.map((comment) => {
    return (
      <div key={comment.id}>
        <div className="">
          <img
            src="https://via.placeholder.com/80"
            // src={`../static/avatars/${comment.user.image.png}`}
            alt={comment.user.username}
          />
          <h1 className="">{comment.user.username}</h1>
          <p>{comment.createdAt}</p>
        </div>
        <p className="">{comment.content}</p>
      </div>
    );
  });
};

export default Comments;
