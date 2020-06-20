import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "./PreviewCard";
// Contexts
// Utils
// Hooks

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 75,
    maxWidth: 750,
  },
}));

const Container = ({ display, callback }) => {
  const classes = useStyles();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    callback().then((response) => {
      console.log(response);
      setProfiles(response.data);
    });
  }, []);

  if (display) {
    return (
      <div className={classes.root}>
        {profiles.map((user) => {
          return <Card display={display} key={user._id} story={user} />;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Container;
