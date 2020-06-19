import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: "17rem",
    margin: 15,
  },
}));

export default function Years({ handleChange, values, errors }) {
  const classes = useStyles();

  const getOptions = () => {
    let options = [];
    let i = 0;

    while (i <= 100) {
      options.push(i);
      i++;
    }
    return options;
  };

  const options = getOptions();

  return (
    <div>
      <FormControl className={classes.formControl} className={classes.menu}>
        <InputLabel id="demo-simple-select-label">Years in Business</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="years"
          value={values.years}
          onChange={(e) => handleChange(e)}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
