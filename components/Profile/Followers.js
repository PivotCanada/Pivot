import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import UserCard from "./UserCard";
// Contexts
import { UserContext } from "../../contexts/UserContext";
import Router from "next/router";
// Utils

// Hooks
import useWitdh from "../../hooks/useWidth";

const useStyles = makeStyles((theme) => ({
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
  },
  header: {
    margin: 0,
    padding: 0,
    marginBottom: 15,
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Noto Sans, sans-serif",
    color: "grey",
  },
  container: {
    display: "flex",
  },
}));

const Following = ({ profile }) => {
  const classes = useStyles();
  const [display, setDisplay] = useState(true);
  const { width, setWidth } = useWitdh();
  const { user } = useContext(UserContext);

  // TODO : Replace with HOC ( I really mean Hook! ) functionality ...

  if (profile.followed_by.length === 0) {
    return null;
  } else {
    return (
      <div className={classes.innerWrapper}>
        <h3 className={classes.header}>followers</h3>
        <div className={classes.container}>
          {profile.followed_by.map((user) => {
            return <UserCard key={user._id} user={user} />;
          })}
        </div>
      </div>
    );
  }
};

export default Following;
