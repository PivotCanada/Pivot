// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const Main = ({ setContent }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ButtonGroup color="primary" aria-label="outlined secondary button group">
        <Button
          style={{ textTransform: "none" }}
          onClick={() => setContent("story")}
        >
          Story
        </Button>
        <Button
          style={{ textTransform: "none" }}
          onClick={() => setContent("posts")}
        >
          Journey
        </Button>
        <Button
          style={{ textTransform: "none" }}
          onClick={() => setContent("likes")}
        >
          Likes
        </Button>
        <Button
          style={{ textTransform: "none" }}
          onClick={() => setContent("contacts")}
        >
          Network
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Main;
