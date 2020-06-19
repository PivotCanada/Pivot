import React, { useContext, useState, useEffect } from "react";
// Components
import Page from "../components/Page";
import Main from "../components/Home/Main";
import LoginModal from "../components/Login/Modal";
import SignUpModal from "../components/SignUpV2/Modal";
import CreateModal from "../components/Post/Create/Modal";
import EditModal from "../components/Edit/Modal";
import DeleteModal from "../components/Delete/Modal";
// Context

export default function Home() {
  return (
    <Page>
      <LoginModal />
      <SignUpModal />
      <CreateModal />
      <EditModal />
      <DeleteModal />
      <Main />
    </Page>
  );
}
