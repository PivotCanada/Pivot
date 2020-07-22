import { useContext } from "react";
// Validation
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Components

import { CarouselContext } from "../UI/Carousel/contexts/CarouselContext";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    margin: 0,
    marginTop: 25,
    width: "17rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrow: {
    color: "white",
  },
}));

const Navigation = ({
  values = {},
  handleErrors,
  validation,
  type = "both",
  callback = () => {},
}) => {
  const displayPrevious = () => type === "both" || type === "previous";
  const displayNext = () => type === "both" || type === "next";

  // TODO : Need to handle format

  const next = async () => {
    let valid = true;
    if (validation) {
      valid = await incrementForm(values, handleErrors, validation);
    }
    if (valid) {
      await callback();
      changeSlide(1);
    }
  };

  const previous = () => changeSlide(-1);

  const { changeSlide } = useContext(CarouselContext);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {displayPrevious() ? (
        <IconButton onClick={previous}>
          <ArrowBackIcon className={classes.arrow} />
        </IconButton>
      ) : null}
      {displayNext() ? (
        <IconButton onClick={next}>
          <ArrowForwardIcon className={classes.arrow} />
        </IconButton>
      ) : null}
    </div>
  );
};

export default Navigation;
