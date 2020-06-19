import React from "react";
// Components
import Page from "../components/Page";
import LoginModal from "../components/Login/Modal";
import SignUpModal from "../components/SignUpV2/Modal";
import Main from "../components/LandingPage/Main";

export default function Home() {
  return (
    <Page>
      <LoginModal />
      <SignUpModal />
      <Main />
    </Page>
  );
}
