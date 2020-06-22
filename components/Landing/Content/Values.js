import { useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextBlock from "../../UI/Content/TextBlock";
// Components

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: 75,
    width: "100vw",
    overflow: "scroll",
  },
}));

const Values = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TextBlock
        header={"We Are Pivot"}
        subheader={"Who are we?"}
        text={
          "We are Pivot, an initative led by the National Film Board of Canada, and the McGill Sustainabilty Systems Intiative. We aim to amplify leadership on climate change among SMEs, by giving them a powerful voice."
        }
      />
    </div>
  );
};

export default Values;
