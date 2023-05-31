import classes from "./ButtonSubmit.module.css";

interface ButtonSubmit {
  children: React.ReactNode;
  type: "submit";
}

const ButtonSubmit = ({ children, type }: ButtonSubmit) => {
  return (
    <div>
      <button type={type} className={classes["submit--button"]}>
        {children}
      </button>
    </div>
  );
};

export default ButtonSubmit;
