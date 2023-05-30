import classes from "../styles/Navbar.module.css";
import CardSocial from "./UI/Cards/CardSocial";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

import { SiWakatime } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["profile--container"]}>
        <img
          className={classes["profile--image"]}
          src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
          alt="mojefoto"
        ></img>
      </div>
      <div className={classes["social--wrapper"]}>
        <p>
          <span className={classes["social--label"]}>Możesz mnie znaleźć:</span>
        </p>
        <ul>
          <a href="https://www.facebook.com/maciej.rajtar.1/" target="_blank">
            <CardSocial className={classes["social--title"]}>
              <AiOutlineFacebook />
            </CardSocial>
          </a>
          <a href="https://www.instagram.com/rajmacc/" target="_blank">
            <CardSocial className={classes["social--title"]}>
              <AiOutlineInstagram />
            </CardSocial>
          </a>
          <a
            href="https://www.linkedin.com/in/maciej-rajtar-854066180/"
            target="_blank"
          >
            <CardSocial className={classes["social--title"]}>
              <AiOutlineLinkedin />
            </CardSocial>
          </a>
          <a href="https://twitter.com/rajtar_maciej" target="_blank">
            <CardSocial className={classes["social--title"]}>
              <AiOutlineTwitter />
            </CardSocial>
          </a>
          <a href="https://github.com/rajmac93" target="_blank">
            <CardSocial className={classes["social--title"]}>
              <AiOutlineGithub />
            </CardSocial>
          </a>
          <a href="https://wakatime.com/@Rajtar" target="_blank">
            <CardSocial className={classes["social--title"]}>
              <SiWakatime />
            </CardSocial>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
