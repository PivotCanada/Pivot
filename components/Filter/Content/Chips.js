import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "./CustomChip";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 15,
  },
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

const Chips = ({ tags, setTags, setActiveTags, activeTags }) => {
  const classes = useStyles();

  useEffect(() => {}, [activeTags]);

  const handleDelete = (tag) => {
    setTags((tags) => [...tags.filter((x) => x.name !== tag.name)]);
    setActiveTags((activeTags) => [
      ...activeTags.filter((x) => x.name !== tag.name),
    ]);
  };

  return (
    <div className={classes.wrapper}>
      {tags.map((tag) => {
        return (
          <Chip
            activeTags={activeTags}
            setActiveTags={setActiveTags}
            tag={tag}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default Chips;
