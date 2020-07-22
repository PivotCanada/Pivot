// Components
import Page from "../components/UI/General/Page";
import Main from "../components/Home/Core/Main";
import OnboardModal from "../components/Onboard/Modal";
// import SignUpModal from "../components/SignUp/Modal";
// import CreateModal from "../components/Post/Create/Modal";
// import EditModal from "../components/Edit/Modal";
// import DeleteModal from "../components/Delete/Modal";
// Context

const Home = () => {
  return (
    <Page>
      {/* <LoginModal />
      <SignUpModal />
      <CreateModal />
      <EditModal />
      <DeleteModal /> */}
      <OnboardModal />
      <Main />
    </Page>
  );
};

export default Home;
