import { useContext, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// Contexts
import { SearchContext } from "../../../contexts/SearchContext";

const useStyles = makeStyles((theme) => ({
  search: {
    width: 250,
    fontFamily: "Open Sans, sans serif",
  },
}));

export default function Search() {
  const classes = useStyles();
  const { search, setSearch, display, setDisplay, full, setFull } = useContext(
    SearchContext
  );

  useEffect(() => {
    if (search.length !== 0) {
      setDisplay(false);
      setFull(true);
    }
  });

  return (
    <TextField
      className={classes.search}
      onChange={(e) => {
        setSearch(e.target.value);
        setDisplay(false);
        setFull(true);
      }}
      size="small"
      id="filled-basic"
      variant="outlined"
      value={search}
    />
  );
}
