import classes from "./LoaderSpinner.module.css";

const LoaderSpinner = ({ className }: any) => {
  return (
    <div className={className}>
      <div className={classes["loading-spinner"]}></div>
    </div>
  );
};

export default LoaderSpinner;
