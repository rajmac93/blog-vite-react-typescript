import { useState } from "react";

import ButtonGuideBanner from "./UI/ButtonGuideBanner";
import Modal from "./UI/Modal";

import classes from "../styles/GuidesBaner.module.css";

const GuidesBaner = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal open={isOpen}>Fancy Modal</Modal>
      <section className={classes["guides--baner"]}>
        <h2>
          Uzyskaj BEZPŁATNY dostęp do ponad 1300 poradników i ponad 50 darmowych
          kursów co miesiąc
        </h2>
        <ButtonGuideBanner onClick={() => setIsOpen(true)}>
          Learn More
        </ButtonGuideBanner>
      </section>
    </>
  );
};

export default GuidesBaner;
