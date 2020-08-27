import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { searchTags } from "../../utils/general/searchTags";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button } from "@material-ui/core";

const motives = [
  {
    name: "I care deeply about the environment",
  },
  {
    name: "I saw a great market opportunity",
  },
  {
    name: "I did it for my employees to create a larger sense of purpose",
  },
  {
    name: "I have a different motivation ...",
  },
];

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 300,
    margin: 0,
  },
  button: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: 11,
    fontFamily: "Open Sans, sans-serif",
    width: 150,
    marginBottom: 15,
  },
}));

function Industry({
  displayCustom,
  setDisplayCustom,
  values,
  handleChange,
  handleErrors,
  errors,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (values.motivation === "I have a different motivation ...") {
      setDisplayCustom(true);
      handleChange("motivation", "");
    }
  }, [values.motivation]);

  if (displayCustom) {
    return (
      <div>
        <TextField
          
          className={classes.textField}
          value={values.motivation}
          error={errors.motivation ? true : false}
          helperText={errors.motivation}
          onChange={(e) => handleChange("motivation", e.target.value)}
          variant={"outlined"}
          size={"small"}
        />
      </div>
    );
  } else {
    return (
      <Autocomplete
        id="tags-standard"
        options={motives}
        getOptionLabel={(option) => option.name}
        onChange={(e, newValue) => {
          e.preventDefault();
          if (newValue !== null) {
            handleChange("motivation", newValue.name);
          } else {
            handleChange("motivation", "");
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label = {values.motivation}
            className={classes.textField}
            error={errors.motivation ? true : false}
            helperText={errors.motivation}
            variant={"outlined"}
            size={"small"}
          />
        )}
      />
    );
  }
}

export default Industry;
