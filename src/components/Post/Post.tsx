import Card from "../UI/Cards/Card";

import classes from "../../styles/Post.module.css";
import LikeDislikeButton from "../UI/Buttons/LikeDislikeButton";

interface Posts {
  post: {
    title: string;
    imgUrl: string;
    body: string;
    author: string;
  };
  index: number;
}
const Post = ({ post: { title, imgUrl, body, author }, index }: Posts) => {
  return (
    <Card className={classes["post--container"]}>
      <LikeDislikeButton />
      <article>
        <div className={classes["title--article"]}>{title}</div>
        <img className={classes.image} src={imgUrl} alt="post" />

        <p>{body}</p>
        <div className={classes.info}>
          <h4>Written by: {author}</h4>
        </div>
      </article>
    </Card>
  );
};

export default Post;
