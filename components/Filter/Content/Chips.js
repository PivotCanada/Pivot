import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "./CustomChip";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",

    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginLeft: -9,
    marginTop: 30,
    minHeight: 35,
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
            variant={"outlined"}
          />
        );
      })}
    </div>
  );
};

export default Chips;
