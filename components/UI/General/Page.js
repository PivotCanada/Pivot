import React, { useContext, useEffect } from "react";
// Components
import AppBar from "./AppBar";
import ProfileModal from "../../Profile/Core/Modal";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
// Hooks
import useValidate from "../../../hooks/useValidate";

export default function Page({ children }) {
  const { showProfile, setShowProfile } = useContext(ModalContext);
  const { user, setUser, setAuthenticated, setLoading } = useContext(
    UserContext
  );
  const { validateSession } = useValidate(
    setUser,
    setAuthenticated,
    setLoading
  );

  useEffect(() => {
    if (!user) {
      validateSession();
    }
  }, [user]);

  return (
    <div>
      <AppBar />
      <div style={{ marginTop: 130 }}>
        {user ? (
          <ProfileModal
            open={showProfile}
            setOpen={setShowProfile}
            story={user}
          />
        ) : null}
        {children}
      </div>
    </div>
  );
}
