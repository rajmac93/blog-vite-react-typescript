import { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import classes from "./LikeDislikeButton.module.css";

const LikeDislikeButton = () => {
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100));
  const [dislikeCount, setDislikeCount] = useState(
    Math.floor(Math.random() * 100)
  );
  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);

      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  return (
    <div className={classes["container--like-dislike"]}>
      <div className={classes["btn-container"]}>
        <button
          className={`${classes.btn} ${
            activeBtn === "like" ? classes["like-active"] : ""
          }`}
          onClick={handleLikeClick}
        >
          <span className={classes["react-icons"]}>
            <AiOutlineLike />
          </span>
          {likeCount}
        </button>

        <button
          className={`${classes.btn} ${
            activeBtn === "dislike" ? classes["dislike-active"] : ""
          }`}
          onClick={handleDisikeClick}
        >
          <span className={classes["react-icons"]}>
            <AiOutlineDislike />
          </span>
          {dislikeCount}
        </button>
      </div>
    </div>
  );
};

export default LikeDislikeButton;
