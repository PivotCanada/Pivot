import { useEffect, useState, useContext } from "react";
// Components
import Page from "../../components/UI/General/Page";
import Main from "../../components/Profile/Core/Main";
import Modal from "../../components/Post/Core/Modal";
// Contexts
import { ModalContext } from "../../contexts/ModalContext";
// Utils
import { fetchUserPosts } from "../../components/Profile/utils/fetchUserPosts";

const Profile = ({ user }) => {
  const { setIds } = useContext(ModalContext);

  const removeDuplicates = (array) =>
    array.reduce((accum, item) => {
      return accum.includes(item) ? accum : [...accum, item];
    }, []);

  const concatenateUsers = () =>
    removeDuplicates([...user.followed_by, ...user.following]);

  useEffect(() => {
    // setIds(concatenateUsers());
    fetchUserPosts(user._id).then((response) => console.log(response));
    // setIds(getUserPostIds());

    console.log(user);
  }, [user]);

  return (
    <Page>
      <Modal />
      <Main story={user} initialContent={"posts"} />
    </Page>
  );
};

// export async function getStaticPaths() {
//   let res = await fetch("https://pivotinfo.herokuapp.com/api/users/all");
//   res = await res.json();
//   const users = res.data;

//   const paths = users.map((user) => ({
//     params: { id: user._id },
//   }));

//   return { paths: paths, fallback: false };
// }

// This also gets called at build time
export async function getServerSideProps({ params }) {
  let res = await fetch(
    `https://pivotinfo.herokuapp.com/api/users/${params.id}`
  );
  res = await res.json();
  const user = res.data;

  // Pass post data to the page via props
  return { props: { user } };
}

export default Profile;
