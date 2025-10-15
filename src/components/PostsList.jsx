import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

export default function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={addPostHandler} onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}
