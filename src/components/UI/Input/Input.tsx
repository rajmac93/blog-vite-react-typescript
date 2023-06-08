interface Input {
  className: string;
  id: string;
  label: string;
  type: string;
  onChange: any;
  pattern?: string;
  maxLength?: number;
  value?: string;
}

const Input = ({
  className,
  id,
  label,
  type,
  onChange,
  maxLength,
  value,
  pattern,
}: Input) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        value={value}
        pattern={pattern}
        required
      />
    </div>
  );
};

export default Input;
