// Material UI
import { makeStyles } from "@material-ui/core/styles";

function Image({ image, size, right = 0 }) {
  const useStyles = makeStyles((theme) => ({
    imageContainer: {
      display: "flex",
      margin: 0,
      marginRight: right,
      width: size,
      height: size,
      maxWidth: size,
      maxHeight: size,
      alignItems: "center",
    },
    image: {
      borderRadius: 3,
      maxWidth: "100%",
      maxHeight: "100%",
      minWidth: "100%",
      minHeight: "100%",
      objectFit: "cover",
      
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} src={image} />
    </div>
  );
}

export default Image;
