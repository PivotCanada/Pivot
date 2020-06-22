// Components
import Page from "../components/UI/General/Page";
import LoginModal from "../components/Login/Modal";
import SignUpModal from "../components/SignUp/Modal";
import Main from "../components/About/Core/Main";

export default function Landing() {
  return (
    <Page>
      <LoginModal />
      <SignUpModal />
      <Main />
    </Page>
  );
}
