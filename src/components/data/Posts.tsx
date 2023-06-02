import { useState } from "react";
import Post from "../Post/Post";
import classes from "./Posts.module.css";
import Data from "../data/post-data.json";

const Posts = () => {
  const [query, setQuery] = useState("");
  const data = Data["data"];

  return (
    <>
      <input
        className={classes["input--title_finder"]}
        placeholder="WPISZ TYTUŁ ARTYKUŁU"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className={classes["posts-container"]}>
        {data
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map((post) => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    </>
  );
};

export default Posts;
