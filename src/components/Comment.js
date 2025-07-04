import React from 'react';
import './Comment.css';

const Comment = ({ comment, toggleLike }) => {
  return (
    <div className="comment">
      <div className="comment-author">{comment.author.name}</div>
      <div className="comment-content">{comment.content}</div>
      <div className="comment-actions">
        <button onClick={() => toggleLike('comment', comment.id)} className={`like-button ${comment.liked ? 'liked' : ''}`}>
          Like
        </button>
        <span>{comment.likes} Likes</span>
      </div>
    </div>
  );
};

export default Comment;
