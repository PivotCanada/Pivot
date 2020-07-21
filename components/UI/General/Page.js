import React, { useContext, useEffect } from "react";
// Components
import AppBar from "./AppBar";
import ProfileModal from "../../Profile/Core/Modal";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
// Hooks
import useValidate from "../../../hooks/useValidate";

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
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
