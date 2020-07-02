import { useEffect, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 75,
    width: "65vw",
    flexWrap: "wrap",
  },
}));

const Container = ({ display, callback, data }) => {
  const classes = useStyles();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (callback) {
      callback().then((response) => {
        if (response.status === "success") {
          setProfiles(response.data);
        }
      });
    } else {
      setProfiles(data);
    }
  }, [data]);

  if (display) {
    return (
      <div className={classes.root}>
        {profiles.map((user) => {
          return (
            <Card data={data} display={display} key={user._id} story={user} />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Container;
