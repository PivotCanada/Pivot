import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { searchTags } from "../../utils/general/searchTags";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 275,
    margin: 0,
  },
}));

function Industry({ values, handleChange, handleErrors, errors }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    // TODO : Standardize Formatting Here -> Inputed function like callback ...
    if (e.target.value.trim() !== "") {
      await searchTags(e.target.value).then((response) => {
        console.log(response);
        setResults(response.data);
      });
    } else {
      setResults([]);
    }
  };

  return (
    <Autocomplete
      id="tags-standard"
      options={results}
      getOptionLabel={(option) => option.name}
      onChange={(e, newValue) => {
        e.preventDefault();
        if (newValue !== null) {
          handleChange("industry", newValue.name);
        } else {
          handleChange("industry", "");
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          className={classes.textField}
          error={errors.industry ? true : false}
          helperText={errors.industry}
          variant={"outlined"}
          size={"small"}
          onChange={(e) => handleSearch(e)}
        />
      )}
    />
  );
}

export default Industry;
