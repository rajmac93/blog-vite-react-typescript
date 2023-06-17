import { useState, useEffect } from "react";

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

  useEffect(() => {
    // disabling scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <>{children}</>
      </Modal>
      <section className={classes["guides--baner"]}>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h2>
        <ButtonGuideBanner onClick={() => setIsOpen(true)}>
          Learn More
        </ButtonGuideBanner>
      </section>
    </>
  );
};

export default GuidesBaner;
