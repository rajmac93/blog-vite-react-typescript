import ButtonSubmit from "./UI/Buttons/ButtonSubmit";
import Input from "./UI/Input/Input";
import Dropdown from "./UI/Input/Dropdown";
import classes from "../styles/FormContact.module.css";

const FormContact = () => {
  const options = [
    { value: "poland", label: "Polska" },
    { value: "ukraine", label: "Ukraina" },
    { value: "germany", label: "Niemcy" },
    { value: "france", label: "Francja" },
    { value: "spain", label: "Hiszpania" },
    { value: "italy", label: "Włochy" },
    { value: "portugal", label: "Portugalia" },
    { value: "russia", label: "Rosja" },
    { value: "china", label: "Chiny" },
  ];
  const labelInput = classes["form--contact__label-input"];

  const sendFormHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send to backend");
  };
  return (
    <div>
      <form onSubmit={sendFormHandle}>
        <div className={classes["form--contact__wrapper"]}>
          <Input label="Imię" className={labelInput} id="name" type="text" />
          <Input
            label="Nazwisko"
            className={labelInput}
            id="surname"
            type="text"
          />
          <Input label="Email" className={labelInput} id="email" type="email" />
          <Input label="Telefon" className={labelInput} id="phone" type="tel" />
          <Input
            label="Firma"
            className={labelInput}
            id="company"
            type="text"
          />

          <Dropdown
            placeholder="Wybierz Państwo"
            options={options}
            onChange={(value: string) => console.log(value)}
          />
        </div>

        <ButtonSubmit type="submit">WYŚLIJ</ButtonSubmit>
      </form>
    </div>
  );
};

export default FormContact;
