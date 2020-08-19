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
    
    marginTop: 20,
    
  },
}));

const MicroLink = ({ link }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {link ? <Microlink url={link} /> : null}
    </div>
  );
};
export default MicroLink;
