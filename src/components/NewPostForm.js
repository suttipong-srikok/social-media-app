import React, { useState } from 'react';
import './NewPostForm.css';

const NewPostForm = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-post-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="new-post-input"
      />
      <button type="submit" className="new-post-submit">Post</button>
    </form>
  );
};

export default NewPostForm;
