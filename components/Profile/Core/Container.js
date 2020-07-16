import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "./Card";
// Context
import { UserContext } from "../../../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%",
    maxWidth: 800,
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 75,
    flexWrap: "wrap",
  },
}));

const Container = ({ display, callback, data }) => {
  const classes = useStyles();
  const [profiles, setProfiles] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (callback) {
      callback().then((response) => {
        if (response.status === "success") {
          setProfiles(response.data);
        }
      });
    } else {
      if (user) {
        console.log(user);
        let filtered = data.filter((profile) => profile._id !== user._id);
        console.log(filtered);
        setProfiles(filtered);
      } else {
        setProfiles(data);
      }
    }
  }, [data]);

  if (display) {
    return (
      <div className={classes.root}>
        {profiles.map((user) => {
          return (
            <Card
              data={profiles}
              display={display}
              key={user._id}
              story={user}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Container;
