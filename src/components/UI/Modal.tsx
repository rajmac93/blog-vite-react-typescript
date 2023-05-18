import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props: any) => {
  if (!props.open) return null;
  return <Card className={classes.modal}>{props.children}</Card>;
};

export default Modal;
