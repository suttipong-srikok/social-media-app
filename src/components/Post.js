import React, { useState } from 'react';
import './Post.css';
import Comment from './Comment';

const Post = ({ post, addComment, toggleLike }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(post.id, comment);
      setComment('');
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.author.avatar} alt="avatar" className="avatar" />
        <div className="post-author">{post.author.name}</div>
      </div>
      <div className="post-content">{post.content}</div>
      <div className="post-actions">
        <button onClick={() => toggleLike('post', post.id)} className={`like-button ${post.liked ? 'liked' : ''}`}>
          Like
        </button>
        <span>{post.likes} Likes</span>
      </div>
      <div className="post-comments">
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} toggleLike={toggleLike} />
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="comment-input"
        />
        <button type="submit" className="comment-submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
