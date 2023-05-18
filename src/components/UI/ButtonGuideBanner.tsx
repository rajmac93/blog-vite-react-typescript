import classes from "./ButtonGuideBanner.module.css";

const ButtonGuideBanner = (props: any) => {
  return (
    <button
      className={`${classes.button} ${classes.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonGuideBanner;
