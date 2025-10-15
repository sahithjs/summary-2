import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function handleBodyChange(event) {
    setEnteredBody(event.target.value);
  }

  function handleAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  function handleSubmit(event) {
    console.log(event.preventDefault());
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleBodyChange} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthorChange} />
      </p>
      <p>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
