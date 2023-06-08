import { useState, ChangeEvent } from "react";

import { phoneNumberAutoFormat } from "../utils";

import ButtonSubmit from "./UI/Buttons/ButtonSubmit";
import Input from "./UI/Input/Input";
import Dropdown from "./UI/Input/Dropdown";
import classes from "../styles/FormContact.module.css";

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

const FormContact = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const nameHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  const surnameHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSurname(e.target.value);
  };

  const emailHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const targetValue = phoneNumberAutoFormat(
      e.target.value
    );
    setPhone(targetValue);
  };

  const companyHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setCompany(e.target.value);
  };

  const countryHandler = (e: any) => {
    setCountry(e);
  };

  const sendFormHandle = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log({
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      company: company,
      country: country,
    });
  };
  const labelInput = classes["form--contact__label-input"];

  return (
    <div>
      <form onSubmit={sendFormHandle}>
        <div className={classes["form--contact__wrapper"]}>
          <Input
            label="Imię"
            className={labelInput}
            id="name"
            type="text"
            pattern="[a-zA-Z]{1,}"
            onChange={nameHandler}
          />
          <Input
            label="Nazwisko"
            className={labelInput}
            id="surname"
            type="text"
            pattern="[a-zA-Z]{1,}"
            onChange={surnameHandler}
          />
          <Input
            label="Email"
            className={labelInput}
            id="email"
            type="email"
            onChange={emailHandler}
          />
          <Input
            label="Telefon"
            className={labelInput}
            id="phone"
            type="tel"
            value={phone}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            onChange={phoneHandler}
            maxLength={11}
          />
          <Input
            label="Firma"
            className={labelInput}
            id="company"
            type="text"
            onChange={companyHandler}
          />

          <Dropdown
            placeholder="Wybierz Państwo"
            options={options}
            onChange={countryHandler}
          />
        </div>

        <ButtonSubmit type="submit">WYŚLIJ</ButtonSubmit>
      </form>
    </div>
  );
};

export default FormContact;
