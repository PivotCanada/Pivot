import { useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ProfileModalContext } from "../../../contexts/ProfileModalContext";

const useStyles = makeStyles((theme) => ({
  arrowForwardIosIcon: {
    position: "fixed",
    top: "50%",
    right: "5%",
    color: "white",
  },
  arrowBackIosIcon: {
    position: "fixed",
    top: "50%",
    left: "5%",
    color: "white",
  },
}));

const ModalNav = () => {
  const classes = useStyles();
  const { nextUser, previousUser, next, previous } = useContext(
    ProfileModalContext
  );

  return (
    <div>
      {next ? (
        <IconButton
          className={classes.arrowForwardIosIcon}
          onClick={() => {
            nextUser();
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      ) : null}
      {previous ? (
        <IconButton
          className={classes.arrowBackIosIcon}
          onClick={() => {
            previousUser();
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      ) : null}
    </div>
  );
};

export default ModalNav;
