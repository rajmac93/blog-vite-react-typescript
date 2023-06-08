interface Input {
  className: string;
  id: string;
  label: string;
  type: string;
}

const Input = ({ className, id, label, type }: Input) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>

      <input id={id} type={type} />
    </div>
  );
};

export default Input;
