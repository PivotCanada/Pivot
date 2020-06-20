import React, { useContext } from "react";
// Components
import AppBar from "./AppBar";
import ProfileModal from "../../Profile/Modal";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";

export default function Page({ children }) {
  const { showProfile, setShowProfile } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  return (
    <div>
      <AppBar />
      {user ? (
        <ProfileModal
          open={showProfile}
          setOpen={setShowProfile}
          story={user}
        />
      ) : null}
      {children}
    </div>
  );
}
