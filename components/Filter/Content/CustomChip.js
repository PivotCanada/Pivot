import { useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  chip: {
    width: 100,
    margin: 0,
    marginTop: 10,
    padding: 0,
    fontFamily: "Poppins, sans serif",
    fontWeight: 400,
    fontSize: 14,
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
      icon={"none"}
      className={classes.chip}
      onClick={async () => {
        setActive(!active);
        await updateActiveTag(tag);
      }}
      variant={"small"}
      color={active ? "primary" : "default"}
      onDelete={() => handleDelete(tag)}
    />
  );
};

export default CustomChip;
