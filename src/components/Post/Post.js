import React from 'react';

import './Post.css';

import Comment from '../Comment/Comment';

function Post({ post }) {
  return (
    <div className="Post">
      <div className="author">
        <img src={post.author.avatar}/>
        <div className="info">
          <span>{post.author.name}</span><br />
          <span>{post.date}</span>
        </div>
      </div>
      <div className="content">
        <p>{post.content}</p>
      </div>
      <div className="divider">
        <hr/>
      </div>
      {post.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
    </div>
  );
}

export default Post;