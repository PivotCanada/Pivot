import { useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// Components
import { searchTags } from "../../../utils/general/searchTags";
// Context
import { FilterContext } from "../../../contexts/FilterContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 0 /*changed this to get the search bar closer to the tags in discover page*. Used to be 100*/,
    margin: 0,
    zIndex: 3,
    backgroundColor: "white",
  },
  textField: {
    minWidth: 1000,
    fontFamily: "Noto Sans JP, sans serif",
  },
}));

function Tags({ setTags, type }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const { setActiveTags } = useContext(FilterContext);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        id="tags-standard"
        options={results}
        getOptionLabel={(option) => option.name}
        onChange={(e, newValue) => {
          if (newValue) {
            setTags((tags) => [
              ...tags.filter((tag) => tag.name !== newValue.name),
              newValue,
            ]);
            setActiveTags((tags) => [
              ...tags.filter((tag) => tag.name !== newValue.name),
              newValue,
            ]);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={async (e) => {
              setSearch(e.target.value);
              // TODO : Standardize Formatting Here -> Inputed function like callback ...
              if (e.target.value.trim() !== "") {
                await searchTags(e.target.value, type).then((response) => {
                  console.log(response);
                  setResults(response.data);
                });
              } else {
                setResults([]);
              }
            }}
            className={classes.textField}
            variant="standard"
            label={type}
          />
        )}
      />
    </div>
  );
}

export default Tags;
