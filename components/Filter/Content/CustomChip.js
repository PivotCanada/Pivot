import { useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: 0,
    marginRight: 5,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Open Sans, sans serif",
    fontWeight: 700,
    fontSize: 10,
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
}));

const CustomChip = ({ tag, setActiveTags, handleDelete }) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const updateActiveTag = (tag) => {
    if (active) {
      setActiveTags((activeTags) => [
        ...activeTags.filter((value) => value.name !== tag.name),
      ]);
    } else {
      setActiveTags((activeTags) => [...activeTags, tag]);
    }
  };

  return (
    <Chip
      size={"small"}
      key={tag.name}
      label={tag.name}
      className={classes.chip}
      onClick={async () => {
        setActive(!active);
        await updateActiveTag(tag);
      }}
      color={active ? "primary" : "default"}
      onDelete={() => handleDelete(tag)}
    />
  );
};

export default CustomChip;
