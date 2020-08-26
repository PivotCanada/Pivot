import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
// Hooks
import useLanguage from "../../../hooks/useLanguage";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

const useStyles = makeStyles(() => ({}));

const Main = ({ setContent }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { keys, truthy } = useLanguage({
    posts: {
      english: "Posts",
      french: "des Voyages",
    },
    stories: {
      english: "People",
      french: "des Histoires",
    },
  });

  return (
    <ButtonGroup color="primary" aria-label="outlined secondary button group">
      <Button
        style={{ textTransform: "none" }}
        onClick={() => {
          setContent("stories");
          // setDisplaySearch(true);
        }}
      >
        {truthy(keys.stories)}
      </Button>

      <Button
        style={{ textTransform: "none" }}
        onClick={() => {
          setContent("posts");
          // setDisplaySearch(true);
        }}
      >
        {truthy(keys.posts)}
      </Button>
    </ButtonGroup>
  );
};

export default Main;
