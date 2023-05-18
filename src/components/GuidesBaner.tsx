import classes from "../styles/GuidesBaner.module.css";
import ButtonGuideBanner from "./UI/ButtonGuideBanner";

const GuidesBaner = () => {
  return (
    <>
      <section className={classes["guides--baner"]}>
        <h2>
          Uzyskaj BEZPŁATNY dostęp do ponad 1300 poradników i ponad 50 darmowych
          kursów co miesiąc
        </h2>
        <ButtonGuideBanner>Learn More</ButtonGuideBanner>
      </section>
    </>
  );
};

export default GuidesBaner;
