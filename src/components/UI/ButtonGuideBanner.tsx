import classes from "./ButtonGuideBanner.module.css";

const ButtonGuideBanner = (props: any) => {
  return (
    <button className={`${classes.button} ${classes.className}`}>
      {props.children}
    </button>
  );
};

export default ButtonGuideBanner;
