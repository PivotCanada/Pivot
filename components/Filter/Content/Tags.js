import { useState, useEffect } from "react";

// import CreateTag from "./CreateTag";
import { makeStyles } from "@material-ui/core/styles";
import { searchTags } from "../utils/searchTags";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { IconButton } from "@material-ui/core";

// TODO: Refactor ...

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 100,
    margin: 0,
    zIndex: 3,
    backgroundColor: "white",
  },
  textField: {
    minWidth: "80vw",
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

function Tags({ tags, setTags, setActiveTags }) {
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

  const classes = useStyles();

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
          />
        )}
      />

      {/* <Search
        search={search}
        setSearch={setSearch}
        setResults={setResults}
        callback={searchTags}
      /> */}
    </div>
  );
}

export default Tags;
