import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textField: {
    width: 275,
    margin: 0,
    flexGrow: 1,
    flexShrink: 1,
  },

  container: {
    display: "flex",
    marginTop: 15,
    justifyContent: "space-between",
    width: 200,
  },
}));

const Website = ({ handleChange, values, errors }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!values.hasSite) {
      handleChange("website", "");
    }
  }, [values.hasSite]);

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        name="website"
        value={values.website}
        onChange={(e) => handleChange("website", e.target.value)}
        disabled={!values.hasSite}
        error={errors.website ? true : false}
        helperText={errors.website}
        size={"small"}
        variant={"outlined"}
      />

      <div className={classes.container}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!values.hasSite}
              onChange={() => handleChange("hasSite", !values.hasSite)}
              name="hasSite"
              color="primary"
            />
          }
          label="We don't have a site"
        />
      </div>
    </div>
  );
};

export default Website;
