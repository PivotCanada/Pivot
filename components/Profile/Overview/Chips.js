import { useRef, useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";
import StoreIcon from "@material-ui/icons/Store";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 9,
    backgroundColor: "#E5E5E5",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  chipArray: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 35,
    marginTop: 15,
  },
}));

function Chips({ profile }) {
  const classes = useStyles();

  return (
    <div className={classes.chipArray}>
      <Chip
        icon={<RoomIcon />}
        label={profile.location}
        className={classes.chip}
      />
      <a
        style={{ textDecoration: "none" }}
        href={"https://" + profile.website}
        target="_blank"
      >
        <Chip
          icon={<PublicIcon />}
          label={profile.website}
          className={classes.chip}
        />
        <Chip
          icon={<StoreIcon />}
          label={profile.industry}
          className={classes.chip}
        />
      </a>
    </div>
  );
}

export default Chips;
