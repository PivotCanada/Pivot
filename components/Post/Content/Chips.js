// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 15,
  },
  chip: {
    margin: 0,
    marginRight: 5,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Open Sans, sans serif",
    fontWeight: 700,
    fontSize: 10,
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
}));

const Chips = ({ tags }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {tags.map((tag) => {
        return (
          <Chip
            size={"small"}
            key={tag.name}
            label={tag.name}
            className={classes.chip}
          />
        );
      })}
    </div>
  );
};

export default Chips;
