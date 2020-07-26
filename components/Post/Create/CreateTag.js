import { createTag } from "./utils/createTag";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

// TODO: Refactor ...
// TODO: Format the tag which will be created, etc ...

function CreateTag({ search, setTags, setSearch, setDisplayCreate }) {
  return (
    <div
      style={{
        marginTop: 15,
        display: "flex",

        minWidth: 200,
      }}
    >
      <Button
        style={{ textTransform: "none", marginRight: 15 }}
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
        Create New Tag
      </Button>
      <Chip
        label={search}
        onDelete={() => {
          setSearch("");
          setDisplayCreate(false);
        }}
      />
    </div>
  );
}

export default CreateTag;
