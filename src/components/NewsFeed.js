import React, { useState } from 'react';
import Post from './Post';
import NewPostForm from './NewPostForm';
import './NewsFeed.css';

const NewsFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: { name: 'John Doe', avatar: 'https://i.pravatar.cc/50?u=1' },
      content: 'This is my first post!',
      likes: 10,
      liked: false,
      comments: [
        {
          id: 1,
          author: { name: 'Jane Smith' },
          content: 'Great post!',
          likes: 2,
          liked: false,
        },
      ],
    },
  ]);

  const addPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      author: { name: 'Current User', avatar: 'https://i.pravatar.cc/50?u=currentUser' },
      content,
      likes: 0,
      liked: false,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const addComment = (postId, content) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        const newComment = {
          id: post.comments.length + 1,
          author: { name: 'Current User' },
          content,
          likes: 0,
          liked: false,
        };
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });
    setPosts(newPosts);
  };

  const toggleLike = (type, id) => {
    const newPosts = posts.map((post) => {
      if (type === 'post' && post.id === id) {
        return { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 };
      }
      if (type === 'comment') {
        const newComments = post.comments.map((comment) => {
          if (comment.id === id) {
            return { ...comment, liked: !comment.liked, likes: comment.liked ? comment.likes - 1 : comment.likes + 1 };
          }
          return comment;
        });
        return { ...post, comments: newComments };
      }
      return post;
    });
    setPosts(newPosts);
  };

  return (
    <div className="news-feed">
      <NewPostForm addPost={addPost} />
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} addComment={addComment} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
