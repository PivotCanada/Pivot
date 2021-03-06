import { useState, useEffect } from "react";

// import CreateTag from "./CreateTag";
import { makeStyles } from "@material-ui/core/styles";
import { searchTags } from "./utils/searchTags";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import CreateTag from "./CreateTag";

import { IconButton } from "@material-ui/core";

// TODO: Refactor ...

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    margin: 0,
    marginTop: 5,
  },
  textField: {
    width: "100%",
    fontFamily: "Noto Sans JP, sans serif",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    minHeight: "20rem",
  },
  header: {
    textAlign: "center",
    fontSize: "1.5rem",
    marginTop: 150,
    marginBottom: 100,
  },
  text: {
    textAlign: "center",

    marginBottom: "1rem",
  },

  button: {
    marginTop: "3rem",
    marginBottom: 20,
  },

  imageContainer: {
    display: "flex",
    width: 200,
    height: 200,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  arrow: {
    width: 50,
    height: 50,
  },

  buttonContainer: {
    display: "flex",
    marginTop: 100,
    width: 200,
    justifyContent: "space-between",
  },
}));

function Tags({ tags, setTags }) {
  const industries = [
    {
      name: "Challenge",
    },
    {
      name: "Achievement",
    },
    {
      name: "Goal",
    },
    {
      name: "Wish",
    },
    {
      name: "Question",
    },
  ];
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);
  const [displayCreate, setDisplayCreate] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    // TODO : Abstract into a different function --> formatting
    results.length === 0 && search.trim() !== ""
      ? setDisplayCreate(true)
      : setDisplayCreate(false);
  }, [results]);

  return (
    <div className={classes.root}>
      {/* {errors.tags && <p>{errors.tags}</p>} */}

      <Autocomplete
        id="tags-standard"
        options={results}
        getOptionLabel={(option) => option.name}
        onChange={(e, newValue) => {
          if (newValue) {
            setTags((tags) => [
              ...tags.filter((tag) => tag.name !== newValue.name),
              newValue,
            ]);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={async (e) => {
              setSearch(e.target.value);
              // TODO : Standardize Formatting Here -> Inputed function like callback ...
              if (e.target.value.trim() !== "") {
                await searchTags(e.target.value).then((response) => {
                  console.log(response);
                  setResults(response.data);
                });
              } else {
                setResults([]);
              }
            }}
            className={classes.textField}
            variant="standard"
            label={"Tags"}
          />
        )}
      />

      {/* <Search
        search={search}
        setSearch={setSearch}
        setResults={setResults}
        callback={searchTags}
      /> */}

      {displayCreate ? (
        <CreateTag
          search={search}
          setTags={setTags}
          setSearch={setSearch}
          setDisplayCreate={setDisplayCreate}
        />
      ) : null}
    </div>
  );
}

export default Tags;
