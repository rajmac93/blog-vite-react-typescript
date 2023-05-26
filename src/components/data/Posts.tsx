import Post from "../Post/Post";
import classes from "./Posts.module.css";

const Posts = () => {
  const blogPosts = [
    {
      title: "JAVASCRIPT",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?",
      author: "Maciej Rajtar",
      imgUrl:
        "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
    },
    {
      title: "TYPESCRIPT",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?",
      author: "Maciej Rajtar",
      imgUrl:
        "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
    },
    {
      title: "REACT",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?",
      author: "Maciej Rajtar",
      imgUrl:
        "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
    },
    {
      title: "REACT",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?",
      author: "Maciej Rajtar",
      imgUrl:
        "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
    },
    {
      title: "REACT",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eius cumque? Numquam nemo perspiciatis, ut asperiores, in aliquid debitis consectetur, vero illo doloribus magnam suscipit dolorem mollitia rem veritatis perferendis?",
      author: "Maciej Rajtar",
      imgUrl:
        "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
    },
  ];
  return (
    <div className={classes["posts-container"]}>
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />

        // dodaj Route do konkretnego artykułu
      ))}
    </div>
  );
};

export default Posts;
