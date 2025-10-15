// import classes from './Modal.module.css';

// export default function Modal({ children, onclose }) {
//   return (
//     <>
//       <div className={classes.backdrop} onClick={onclose} />
//       <dialog open className={classes.modal}>
//         {children}
//       </dialog>
//     </>
//   );
// }

import classes from './Modal.module.css';

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
