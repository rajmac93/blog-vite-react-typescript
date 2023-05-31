import ButtonSubmit from "./UI/Buttons/ButtonSubmit";

import classes from "../styles/FormContact.module.css";

const FormContact = () => {
  const wrapperClassName = classes["form--contact__label-input"];
  const sendFormHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send to backend");
  };
  return (
    <div>
      <form onSubmit={sendFormHandle}>
        <div className={classes["form--contact__wrapper"]}>
          <div className={classes["form--contact__label-input"]}>
            <label htmlFor="name">Imię</label>
            <input id="name" type="text"></input>
          </div>
          <div className={classes["form--contact__label-input"]}>
            <label htmlFor="surname">Nazwisko</label>
            <input id="surname" type="text"></input>
          </div>
          <div className={classes["form--contact__label-input"]}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="e-mail"></input>
          </div>
          <div className={classes["form--contact__label-input"]}>
            <label htmlFor="company">Firma</label>
            <input id="company" type="text"></input>
          </div>
          <div className={classes["form--contact__label-input"]}>
            <label htmlFor="phone">Telefon</label>
            <input id="phone" type="tel"></input>
          </div>
          <div className={classes["form--contact__label-input"]}>
            <label htmlFor="country">Państwo</label>
            <select id="country" name="Państwa">
              <option value="Polska">Polska</option>
              <option value="Anglia">Anglia</option>
              <option value="Niemcy">Niemcy</option>
              <option value="Hiszpania">Hiszpania</option>
              <option value="Francja">Francja</option>
            </select>
          </div>
        </div>

        <ButtonSubmit type="submit">WYŚLIJ</ButtonSubmit>
      </form>
    </div>
  );
};

export default FormContact;
