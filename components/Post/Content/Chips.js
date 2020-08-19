// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 25,
  },
  chip: {
    margin: 0,
    marginRight: 5,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Cairo, sans-serif",
    fontWeight: 500,
    borderRadius: 2,
    fontSize: 13,
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
          <Chip key={tag.name} label={tag.name} className={classes.chip} />
        );
      })}
    </div>
  );
};

export default Chips;
