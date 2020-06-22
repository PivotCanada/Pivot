// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
// Hooks
import useLanguage from "../../../hooks/useLanguage";

const useStyles = makeStyles(() => ({}));

const Main = ({ display, setContent }) => {
  const classes = useStyles();
  const { keys, truthy } = useLanguage({
    posts: {
      english: "Posts",
      french: "des Postes",
    },
    stories: {
      english: "Stories",
      french: "des Histoires",
    },
  });

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
        {truthy(keys.stories)}
      </Button>
      <Button
        style={{ textTransform: "none" }}
        onClick={() => setContent("posts")}
      >
        {truthy(keys.posts)}
      </Button>
    </ButtonGroup>
  );
};

export default Main;
