import { useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: 0,
    marginRight: 20,
    borderRadius: 2,
    borderWidth: 0,
    padding: 0,
    fontFamily: "Poppins, sans serif",
    fontWeight: 400,
    fontSize: 14,
  },
}));

const CustomChip = ({tag, handleDelete }) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <Chip
      size={"small"}
      key={tag.name}
      label={tag.name}
      icon={"none"}
      className={classes.chip}
      size={"small"}
      color = {"primary"}
      variant = {"outlined"}
      onDelete={() => handleDelete(tag)}
    />
  );
};

export default CustomChip;
