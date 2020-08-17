import React, { useContext, useEffect } from "react";
// Components
import AppBar from "./AppBar";
import ProfileModal from "../../Profile/Core/Modal";
import Overview from "../../Profile/Overview/Main";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
// Hooks
import useValidate from "../../../hooks/useValidate";
// import Overview from "../../Post/Content/Overview";

export default function Page({ children, top = 65 }) {
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
      <div
        style={{
          display: "flex",
          marginTop: top,
          minWidth: "100vw - 300",
          minHeight: "100%",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
