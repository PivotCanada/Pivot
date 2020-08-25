// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: 90,

    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const Main = ({ setContent }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ButtonGroup fullWidth={true} color="primary" orientation = "vertical">
        {/* if user profile then display */}
        <Button
          style={{ textTransform: "none" }}
          onClick={() => setContent("explore")}
        >
          Explore
        </Button>
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
