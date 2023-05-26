import classes from "./CardSocial.module.css";

const CardSocial = (props: any) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default CardSocial;
