import ReactDOM from "react-dom";

import Card from "../Cards/Card";
import classes from "./Modal.module.css";
import FormContact from "../../FormContact";

interface Backdrop {
  onClose: any;
}

interface Modal {
  open: boolean;
  onClose: any;
  children: React.ReactNode;
}

const Backdrop = ({ onClose }: Backdrop) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const Modal = ({ open, onClose, children }: Modal) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop onClose={onClose} />
      <Card className={classes.modal}>
        <header>
          <h3>Formularz kontaktowy</h3>
        </header>
        <main>
          <FormContact />
        </main>
        {children}
        {/* <button className={classes["close--button"]} onClick={onClose}>
          zamknij
        </button> */}
      </Card>
    </>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("portal-modal")!
  );
};

export default Modal;
