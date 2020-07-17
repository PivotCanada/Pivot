import { useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: "flex",
    width: "300px",
    height: "200px",
    alignItems: "center",

    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 4,
  },
}));

const Image = ({ story }) => {
  const classes = useStyles();
  const { setOpen, setId } = useContext(ModalContext);

  const handleClick = () => {
    setOpen(true);
    setId(story._id);
  };

  return (
    <div onClick={handleClick} className={classes.imageContainer}>
      <img className={classes.image} src={story.photo} />
    </div>
  );
};

export default Image;
