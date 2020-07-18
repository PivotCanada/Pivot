import { useEffect, useState, useContext } from "react";
// Components
import Page from "../../components/UI/General/Page";
import Main from "../../components/Profile/Core/Main";
import LoginModal from "../../components/Login/Modal";
import SignUpModal from "../../components/SignUp/Modal";
import DeleteModal from "../../components/Delete/Modal";
import Modal from "../../components/Profile/Core/Modal";
// Contexts
import { ModalContext } from "../../contexts/ModalContext";

const Profile = ({ user }) => {
  const { setIds, ids } = useContext(ModalContext);

  const removeDuplicates = (array) =>
    array.reduce((accum, item) => {
      return accum.includes(item) ? accum : [...accum, item];
    }, []);

  const concatenateUsers = () =>
    removeDuplicates([...user.followed_by, ...user.following]);

  useEffect(() => {
    setIds(concatenateUsers());
  }, [user]);

  return (
    <Page top={100}>
      {/* <ProfileStore page={true}> */}
      {/* <DeleteModal />
        <LoginModal />
        <SignUpModal /> */}
      <Modal />
      <Main story={user} initialContent={"posts"} />
      {/* </ProfileStore> */}
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
