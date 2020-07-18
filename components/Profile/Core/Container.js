import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "./Card";
// Context
import { UserContext } from "../../../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",

    maxWidth: 700,
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 75,
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
        let filtered = data.filter((profile) => profile._id !== user._id);
        setProfiles(filtered);
      } else {
        setProfiles(data);
      }
    }
  }, [data]);

  if (display) {
    return (
      <div className={classes.wrapper}>
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
