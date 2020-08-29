import { useState, useContext, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
// Contexts
import { FilterContext } from "../../../contexts/FilterContext";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: 0,
    marginRight: 20,
    borderRadius: 2,
    borderWidth: 0,
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

const CustomChip = ({ tag, handleDelete }) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const { activeTags, setActiveTags } = useContext(FilterContext);

  const updateActiveTag = (tag) => {
    if (isActive(tag)) {
      setActiveTags((activeTags) => [
        ...activeTags.filter((value) => value.name !== tag.name),
      ]);
    } else {
      setActiveTags((activeTags) => [...activeTags, tag]);
    }
  };

  const isActive = (tag) => {
    let names = activeTags.map((activeTag) => activeTag.name);
    return names.includes(tag.name);
  };

  useEffect(() => {}, [activeTags]);

  return (
    <Chip
      size={"small"}
      key={tag.name}
      label={tag.name}
      className={classes.chip}
      onClick={async () => {
        await updateActiveTag(tag);
      }}
      size={"small"}
      variant={"outlined"}
      color={isActive(tag) ? "primary" : "default"}
      onDelete={() => handleDelete(tag)}
    />
  );
};

export default CustomChip;
