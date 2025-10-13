import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

export default function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function handleBodyChange(event) {
    setEnteredBody(event.target.value);
  }

  function handleAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  function handleHideModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <Modal onClose={handleHideModal}>
        {modalIsVisible && (
          <NewPost
            onBodyChange={handleBodyChange}
            onAuthorChange={handleAuthorChange}
          />
        )}
      </Modal>

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Micheal" body="Learn the full course" />
      </ul>
    </>
  );
}
