import { useEffect, useState } from "react";
import classes from "./Dropdown.module.css";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

interface Dropdown {
  placeholder: string;
  options: object[];
  onChange: any;
}

interface Option {
  option: object;
  value: string;
}

const Dropdown = ({
  placeholder,
  options,
  onChange,
}: Dropdown) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] =
    useState<any>(null);

  useEffect(() => {
    const handler = () => {
      setShowMenu(false);

      window.addEventListener("click", handler);
      return () =>
        window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e: any) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeholder;
  };

  const onItemClick = (option: Option) => {
    setSelectedValue(option);
    onChange(option.value);
  };

  const isSelected = (option: Option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <div className={classes["dropdown--container"]}>
      <div
        onClick={handleInputClick}
        className={classes["dropdown--input"]}
      >
        <div
          className={classes["dropdown--selected__value"]}
        >
          {getDisplay()}
        </div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
        {showMenu && (
          <div className={classes["dropdown--menu"]}>
            {options.map((option: any) => (
              <div
                onClick={() => onItemClick(option)}
                key={option.value}
                className={`${classes["dropdown--item"]} ${
                  isSelected(option) && classes["selected"]
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
