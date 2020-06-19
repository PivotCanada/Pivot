import React, { useState, useEffect, useContext } from "react";
// Components
import AppBar from "./AppBar";
import Modal from "./Profile/Modal";
// Contexts
import { UserContext } from "../contexts/UserContext";
import { ModalContext } from "../contexts/ModalContext";

export default function Page({ children }) {
  // const [open, setOpen] = useState(false);
  const { showProfile, setShowProfile } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  return (
    <div>
      <AppBar />
      {user ? (
        <Modal open={showProfile} setOpen={setShowProfile} story={user} />
      ) : null}
      {children}
    </div>
  );
}
