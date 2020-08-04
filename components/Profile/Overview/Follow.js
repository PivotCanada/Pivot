import { useContext, useEffect, useState, useCallback } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Button } from "@material-ui/core";

// Hooks
import useFollow from "../../../hooks/useFollow";

// TODO : Refactor ...

const Follow = ({ profile }) => {
  const { user, authenticated } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const { onFollow, followed, sameUser } = useFollow(user, profile, setLoading);

  useEffect(() => {}, [user, profile]);

  if (!authenticated || sameUser) {
    return null;
  } else {
    return (
      <Button
        variant="contained"
        color="primary"
        style={{
          width: 100,
          textTransform: "none",
          marginTop: 20,
          fontSize: 12,
          width: 210,
          fontFamily: "Noto Sans, sans-serif",
          fontWeight: 700,
          borderRadius: 2,
        }}
        onClick={() => onFollow(user, profile)}
        type="button"
      >
        {followed ? "UnFollow" : "Follow"}
      </Button>
    );
  }
};

export default Follow;
