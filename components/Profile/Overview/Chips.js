import { useState } from "react";
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

const Chips = ({ profile }) => {
  const classes = useStyles();
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  return (
    <div className={classes.chipArray}>
      {profile.location ? (
        <Chip
          icon={<RoomIcon />}
          label={location}
          onClick={() => {
            setLocation(location ? "" : profile.location);
          }}
          className={classes.chip}
        />
      ) : null}

      {profile.industry ? (
        <Chip
          icon={<StoreIcon />}
          label={industry}
          className={classes.chip}
          onClick={() => {
            setIndustry(industry ? "" : profile.industry);
          }}
        />
      ) : null}
      {profile.website ? (
        <a
          style={{ textDecoration: "none" }}
          href={"https://" + profile.website}
          target="_blank"
        >
          <Chip
            icon={<PublicIcon />}
            // label={profile.website}
            className={classes.chip}
          />
        </a>
      ) : null}
    </div>
  );
};

export default Chips;
