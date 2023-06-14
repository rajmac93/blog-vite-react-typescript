import { useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import Post from "../Post/Post";
import LoaderSpinner from "../UI/Loader/LoaderSpinner";

import classes from "./Posts.module.css";
import Data from "../data/post-data.json";

const Posts = () => {
  // const [query, setQuery] = useState("");
  const [dataSource, setDataSource] = useState(
    Array.from(Data["data"].splice(0, 10))
  );

  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (dataSource.length) {
      //SIMLUATION OF API CALL
      setTimeout(() => {
        setDataSource(
          dataSource.concat(
            Array.from(Data["data"].splice(0, 10))
          )
        );
      }, Math.floor(Math.random() * 1000));
    } else {
      setHasMore(false);
    }
  };

  return (
    <>
      {/* <input
        className={classes["input--title_finder"]}
        placeholder="WPISZ TYTUŁ ARTYKUŁU"
        onChange={(event) => setQuery(event.target.value)}
      /> */}

      <InfiniteScroll
        className={classes["posts-container"]}
        dataLength={Data["data"].length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <LoaderSpinner className={classes.loader} />
        }
        endMessage={<p>No more data!</p>}
      >
        {dataSource
          // .filter((post) => {
          //   if (query === "") {
          //     return post;
          //   } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
          //     return post;
          //   }
          // })
          //? filtering data (commented brcouse of trying with infinite scrolling)
          .map((post) => (
            <Post key={post.id} post={post} />
          ))}
      </InfiniteScroll>
    </>
  );
};

export default Posts;
