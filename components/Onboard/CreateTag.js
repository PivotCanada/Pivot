import { createTag } from "../../utils/general/createTag";
import Button from "@material-ui/core/Button";
import Chip from "../../Filter/Content/CustomChip";
import { makeStyles } from "@material-ui/core/styles";

// TODO: Refactor ...
// TODO: Format the tag which will be created, etc ...
const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
    marginRight: 15,
    height: 30,
    width: 80,
    fontSize: 10,
    fontFamily: "Poppins, sans serif",
  },
  root: {
    marginTop: 70,
    display: "flex",
    minWidth: 200,
  },
}));

function CreateTag({ search, setTags, setSearch, setDisplayCreate }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        size={"small"}
        onClick={async () => {
          await createTag(search).then((response) => {
            console.log(response);
            setTags((tags) => [...tags, response.data]);
            setSearch("");
            setDisplayCreate(false);
          });
        }}
      >
        Create Tag
      </Button>
      <Chip
        tag={{ name: search }}
        handleDelete={() => {
          setSearch("");
          setDisplayCreate(false);
        }}
      />
    </div>
  );
}

export default CreateTag;
