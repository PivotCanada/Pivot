import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const industries = [
  {
    name: "Challenge",
  },
  {
    name: "Achievement",
  },
  {
    name: "Goal",
  },
  {
    name: "Wish",
  },
  {
    name: "Question",
  },
  {
    name: "Miscellaneous",
  },
];

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 200,
    margin: 0,
  },
}));

function Industry({ tags, setTags }) {
  const classes = useStyles();

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <Autocomplete
      multiple
      defaultValue={[]}
      id="tags-standard"
      options={industries}
      getOptionLabel={(option) => option.name}
      onChange={(e, newValue) => {
        e.preventDefault();
        if (newValue !== null) {
          setTags([...newValue]);
        } else {
          setTags([]);
        }
      }}
      renderInput={(params) => (
        <TextField {...params} className={classes.textField} label={"Tags"} />
      )}
    />
  );
}

export default Industry;
