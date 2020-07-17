import { useContext, useEffect } from "react";
// Components
import Posts from "./Posts";
import Story from "./Story";
import Contacts from "./Contacts";
// Context
import { ModalContext } from "../../../contexts/ModalContext";

const Main = ({ story, content, posts, likes, pageOpen }) => {
  const { id } = useContext(ModalContext);

  useEffect(() => {}, [id]);

  switch (content) {
    case "story":
      return <Story story={story} />;
    case "posts":
      return <Posts posts={posts} header={"Posts"} />;
    case "likes":
      return <Posts posts={likes} header={"Likes"} />;
    case "contacts":
      return <Contacts story={story} pageOpen={pageOpen} />;
    default:
      return null;
  }
};

export default Main;
