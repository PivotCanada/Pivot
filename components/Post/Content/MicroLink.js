import Microlink from "@microlink/react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
    margin: 0,

    marginTop: 35,
  },
}));

const MicroLink = ({ link }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {link ? (
        <Microlink
          style={{
            "--microlink-max-width": "100%",
            height: 500,
          }}
          url={link}
          media="video"
          // this needs to accomodate various media types
          size={"large"}
          autoplay={true}
          loop={true}
        />
      ) : null}
    </div>
  );
};
export default MicroLink;
