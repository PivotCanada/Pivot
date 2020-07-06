import React, { useContext, useEffect } from "react";
// Components
import AppBar from "./AppBar";
import ProfileModal from "../../Profile/Core/Modal";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
// Hooks
import useValidate from "../../../hooks/useValidate";

export default function Page({ children, top = 65 }) {
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
      <div style={{ marginTop: top }}>
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
