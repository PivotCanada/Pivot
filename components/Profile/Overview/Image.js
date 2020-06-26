// Material UI
import { makeStyles } from "@material-ui/core/styles";

function Image({ image, size }) {
  const useStyles = makeStyles((theme) => ({
    imageContainer: {
      display: "flex",
      width: size,
      height: size,
      maxWidth: size,
      maxHeight: size,
      alignItems: "center",
    },
    image: {
      borderRadius: "50%",
      maxWidth: "100%",
      maxHeight: "100%",
      minWidth: "100%",
      minHeight: "100%",
      objectFit: "cover",
    },
  }));
  const classes = useStyles();

  const default_image =
    "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";

  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} src={image ? image : default_image} />
    </div>
  );
}

export default Image;
