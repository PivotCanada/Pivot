import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Chip from "./CustomChip";
// Contexts
import { FilterContext } from "../../../contexts/FilterContext";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginLeft: -9,
    marginTop: 20,
    minHeight: 35,
  },
}));

const Chips = ({ tags, setTags }) => {
  const classes = useStyles();
  const { activeTags, setActiveTags } = useContext(FilterContext);

  const handleDelete = (tag) => {
    setTags((tags) => [...tags.filter((x) => x.name !== tag.name)]);
    setActiveTags((activeTags) => [
      ...activeTags.filter((x) => x.name !== tag.name),
    ]);
  };

  return (
    <div className={classes.wrapper}>
      {tags.map((tag) => {
        return <Chip key={tag.name} tag={tag} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default Chips;
