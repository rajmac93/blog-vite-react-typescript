import Card from "../UI/Cards/Card";

import classes from "../../styles/Post.module.css";
import LikeDislikeButton from "../UI/Buttons/LikeDislikeButton";

interface Posts {
  post: {
    title: string;
    imgUrl: string;
    body: string;
    first_name: string;
    last_name: string;
  };
}
const Post = ({
  post: { title, imgUrl, body, first_name, last_name },
}: Posts) => {
  return (
    <Card className={classes["post--container"]}>
      <article>
        <div className={classes["title--article"]}>{title}</div>
        <img className={classes.image} src={imgUrl} alt="post" />

        <p className={classes["post--article"]}>{body}</p>
        <div className={classes.info}>
          <h4>Written by: {`${first_name} ${last_name}`}</h4>
        </div>
      </article>
      <LikeDislikeButton />
    </Card>
  );
};

export default Post;
