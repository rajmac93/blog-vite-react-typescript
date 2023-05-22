import Card from "../UI/Card";

import Posts from "../data/Posts";

import classes from "../../styles/Post.module.css";

// interface Posts {
//   blogPosts: { title: string; body: string; author: string; imgUrl: string }[];
// }
// ({ post: { title, body, imgUrl, author }, index })
const Post = ({ title, imgUrl, body, author }) => {
  return (
    <Card className={classes["post--container"]}>
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
