import React from "react";
// Components
import Page from "../components/Page";
import Modal from "../components/SignUp/Modal";
import Main from "../components/LandingPage/Main";

export default function Home() {
  return (
    <Page>
      <Modal />
      <Main />
    </Page>
  );
}
