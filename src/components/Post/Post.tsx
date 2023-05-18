import classes from "../../styles/Post.module.css";
import Card from "../UI/Card";

const Post = (props: any) => {
  return (
    <Card className={classes["post--container"]}>
      <article>
        <div className={classes["title--article"]}>{props.title}</div>
        <img className="image" src={props.imgUrl} alt="post" />
        <p>{props.body}</p>
        <div className="info">
          <h4>Written by: {props.author}</h4>
        </div>
      </article>
    </Card>
  );
};

export default Post;
