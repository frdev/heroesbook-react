import React from 'react';

import './Comment.css';

function Comment({ comment }) {
  return (
    <div className="Comment">
      <div className="photo">
        <img src={comment.author.avatar} />
      </div>
      <div className="content">
        <p><span>{comment.author.name}</span> {comment.content}</p>
      </div>
    </div>
  );
}

export default Comment;