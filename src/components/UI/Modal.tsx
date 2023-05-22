import Card from "./Card";
import classes from "./Modal.module.css";

const Backdrop = (props: any) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Modal = (props: any) => {
  const sendFormHandle = (e) => {
    e.preventDefault();
    console.log("send to backend");
  };

  if (!props.open) return null;
  return (
    <>
      <Backdrop onClose={props.onClose} />
      <Card className={classes.modal}>
        <main>
          <form onSubmit={sendFormHandle}>
            <label htmlFor="name">Imię</label>
            <input id="name" type="text"></input>
            <label htmlFor="surname">Nazwisko</label>
            <input id="surname" type="text"></input>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="e-mail"></input>
            <label htmlFor="company">Firma</label>
            <input id="company" type="text"></input>
            <label htmlFor="phone">Telefon</label>
            <input id="phone" type="tel"></input>
            <button type="submit">WYŚLIJ!</button>
          </form>
        </main>
        {props.children}
        <button className={classes["close--button"]} onClick={props.onClose}>
          zamknij
        </button>
      </Card>
    </>
  );
};

export default Modal;
