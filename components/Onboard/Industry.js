import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { searchTags } from "../../utils/general/searchTags";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CreateTag from "./CreateTag";

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
  const [displayCreate, setDisplayCreate] = useState(false);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    // TODO : Standardize Formatting Here -> Inputed function like callback ...
    if (e.target.value.trim() !== "") {
      await searchTags(e.target.value, "Industry").then((response) => {
        console.log(response);
        setResults(response.data);
      });
    } else {
      setResults([]);
    }
  };

  const onChange = (newValue) => {
    if (newValue !== null) {
      handleChange("industry", newValue.name);
    } else {
      handleChange("industry", "");
    }
  };

  useEffect(() => {
    // TODO : Abstract into a different function --> formatting
    results.length === 0 && search.trim() !== ""
      ? setDisplayCreate(true)
      : setDisplayCreate(false);
  }, [results]);

  return (
    <div>
      <Autocomplete
        id="tags-standard"
        value={values.location}
        options={results}
        getOptionLabel={(option) => option.name}
        onChange={(e, newValue) => {
          e.preventDefault();
          onChange(newValue);
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
      {displayCreate ? (
        <CreateTag
          search={search}
          setSearch={setSearch}
          setDisplayCreate={setDisplayCreate}
          onChange={onChange}
        />
      ) : null}
    </div>
  );
}

export default Industry;
