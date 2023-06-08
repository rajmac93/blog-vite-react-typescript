import { useState } from "react";

import ButtonGuideBanner from "./UI/Buttons/ButtonGuideBanner";
import Modal from "./UI/Modals/Modal";

import classes from "../styles/GuidesBaner.module.css";

interface GuidesBaner {
  children?: React.ReactNode;
}

const GuidesBaner = ({ children }: GuidesBaner) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <>{children}</>
      </Modal>
      <section className={classes["guides--baner"]}>
        <h2>
          Uzyskaj BEZPŁATNY dostęp do ponad 1300 poradników
          i ponad 50 darmowych kursów co miesiąc
        </h2>
        <ButtonGuideBanner onClick={() => setIsOpen(true)}>
          Learn More
        </ButtonGuideBanner>
      </section>
    </>
  );
};

export default GuidesBaner;
