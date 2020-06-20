// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const Main = ({ display, setContent }) => {
  const classes = useStyles();

  return (
    <ButtonGroup
      style={{ display: display ? "block" : "none" }}
      color="primary"
      aria-label="outlined secondary button group"
    >
      <Button
        style={{ textTransform: "none" }}
        onClick={() => setContent("stories")}
      >
        Stories
      </Button>
      <Button
        style={{ textTransform: "none" }}
        onClick={() => setContent("posts")}
      >
        Posts
      </Button>
    </ButtonGroup>
  );
};

export default Main;
