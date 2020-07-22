import { useState, useEffect } from "react";
import { fetchCities } from "../../utils/location/fetchCities";
// import { validateLocation } from "../../../utils/validation/validateLocation";
// import { incrementForm } from "../../../utils/validation/incrementForm";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "17rem",
  },
}));

function Location({
  values,
  handleChange,

  errors,
}) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // console.log(results);
  }, [errors]);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={results}
      onChange={(e, newValue) => {
        // Create a new value from the user input
        if (newValue !== null) {
          handleChange("location", newValue.name);
          console.log(newValue);
        } else {
          handleChange("location", "");
        }
      }}
      getOptionLabel={(city) => city.name}
      // TODO : Change style ...
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
            if (e.target.value.length > 2) {
              fetchCities(e.target.value).then((response) => {
                setResults(response);
              });
            } else {
              setResults([]);
            }
          }}
          className={classes.textField}
          error={errors.location ? true : false}
          helperText={errors.location}
          variant={"outlined"}
          size={"small"}
        />
      )}
    />
  );
}

export default Location;
