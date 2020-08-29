import { useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Chips from "../Content/Chips";
import Tags from "../Content/Tags";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 0,
    margin: 0,
  },
}));

const Main = ({ type = [""], initialTags = [] }) => {
  const classes = useStyles();
  const [tags, setTags] = useState([]);

  return (
    <div className={classes.wrapper}>
      <Chips tags={tags} setTags={setTags} />
      <Tags setTags={setTags} tags={tags} type={type} />
    </div>
  );
};

export default Main;
