import classes from './Post.module.css';

export default function Post({ author, body }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}

// const names = ['Maximillain', 'Micheal'];

// export default function Post() {
//   const chosenName = Math.random() > 0.5 ? names[0] : names[1];
//   return (
//     <>
//       <h1>{chosenName}</h1>
//       <p>ReactJS is Awesome!</p>
//     </>
//   );
// }
