// Components
import Posts from "./Posts";
import Story from "./Story";
import Contacts from "./Contacts";

const Main = ({ story, content, posts, likes, pageOpen }) => {
  switch (content) {
    case "story":
      return <Story story={story} />;
    case "posts":
      return <Posts posts={posts} header={"Posts"} />;
    case "likes":
      return <Posts posts={likes} header={"Likes"} />;
    case "contacts":
      return <Contacts story={story} />;
    default:
      return null;
  }
};

export default Main;
