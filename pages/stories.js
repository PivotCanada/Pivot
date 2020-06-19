import React, { useContext, useState, useEffect } from "react";
// Components
import Page from "../components/Page";
import Main from "../components/Stories/Main";
import LoginModal from "../components/Login/Modal";
import SignUpModal from "../components/SignUpV2/Modal";

// Context

export default function Home() {
  return (
    <Page>
      <LoginModal />
      <SignUpModal />
      <Main />
    </Page>
  );
}
