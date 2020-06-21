import { useEffect, useState } from "react";
// Components
import Posts from "./Posts";
import Story from "./Story";
// Utils
import { fetchUserPosts } from "./utils/fetchUserPosts";

function Main({ story, content }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (id) => {
    await fetchUserPosts(id).then((response) => {
      console.log(response);
      if (response.status === "success") {
        setPosts(response.data);
      }
    });
  };

  useEffect(() => {
    fetchPosts(story._id);
  }, []);

  switch (content) {
    case "story":
      return <Story story={story} />;
    case "posts":
      return <Posts posts={posts} />;
    default:
      return null;
  }
}

export default Main;

// <div className={classes.article}>
// <ButtonGroup setContent={setContent} />
// {identical ? <CreatePost /> : null}

// {content === "story" ? (
//   <div className={classes.body}>
//     <h1 className={classes.title}>Story</h1>
//     <h2 className={classes.subheader}>Our Challenges</h2>
//     <p className={classes.text}>{story.challenges}</p>
//     <h2 className={classes.subheader}>Our Wish</h2>
//     <p className={classes.text}>{story.wish}</p>
//     <h2 className={classes.subheader}>Our Achievements</h2>
//     <p className={classes.text}>{story.achievements}</p>
//     <h2 className={classes.subheader}>Our Goals</h2>
//     <p className={classes.text}>{story.goals}</p>
//   </div>
// ) : null}

// {content === "posts" ? (
//   <div className={classes.bodyPost}>
//     <h1 className={classes.title}>Posts</h1>
//     {posts.map((post) => {
//       return <PostCard key={post._id} post={post} display={true} />;
//     })}
//   </div>
// ) : null}

// {content === "likes" ? (
//   <div className={classes.bodyPost}>
//     <h1 className={classes.title}>Likes</h1>
//     {story.likes.map((post) => {
//       return <PostCard key={post._id} post={post} display={true} />;
//     })}
//   </div>
// ) : null}

// {content === "contacts" ? (
//   <div className={classes.body}>
//     <h1 className={classes.title}>Contacts</h1>
//     <div className={classes.bodyContacts}>
//       {/* <Following profile={story} />
//       <Followers profile={story} /> */}
//     </div>
//   </div>
// ) : null}
// </div>
