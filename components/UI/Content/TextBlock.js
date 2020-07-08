import { useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: "70%",
  },
  subheader: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "Open Sans, sans serif",
    color: "blue",
  },
  header: {
    textAlign: "center",
    marginBottom: 35,
    fontSize: 28,
    fontWeight: 700,
    fontFamily: "Noto Sans, sans serif",
  },
  text: {
    textAlign: "center",
    width: "100%",
    margin: 5,
    fontWeight: 300,
    fontSize: 20,
    fontFamily: "Open Sans, sans serif",
  },
}));

const TextBlock = ({ header, subheader, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <p className={classes.subheader}>{subheader}</p>
      <h1 className={classes.header}>{header}</h1>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default TextBlock;
