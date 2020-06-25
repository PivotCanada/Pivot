import { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, InputAdornment } from "@material-ui/core";
import { searchUsers } from "./utils/searchUsers";
import { Button, ButtonGroup } from "@material-ui/core";

import Card from "../Profile/Core/Card";

import { ClickAwayListener } from "@material-ui/core";

// Contexts
import { SearchContext } from "../../contexts/SearchContext";

// Hooks
import useLanguage from "../../hooks/useLanguage";

function Search({ displaySearch }) {
  const { keys, truthy } = useLanguage({
    search: {
      english: "Search",
      french: "Chercher",
    },
    industry: {
      english: "Industry",
      french: "Industrie",
    },
    location: {
      english: "Location",
      french: "Emplacement",
    },
  });

  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("location");
  const { search, setSearch, display, setDisplay, full, setFull } = useContext(
    SearchContext
  );

  // TODO : Show close button only when there are results

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",

      width: "80vw",
    },
    search: {
      width: "80%",
      fontFamily: "Poppins, sans serif",
      marginBottom: 30,
    },
    searchContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    innerWrapper: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      flexWrap: "wrap",
      paddingLeft: 0,
      "&:hover": {
        opacity: 0.8,
        cursor: "pointer",
      },
    },
    iconButton: {
      width: 50,
      height: 50,
      alignSelf: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    chip: {
      marginRight: theme.spacing(1),
      marginBottom: 10,
      paddingLeft: 5,
      paddingRight: 5,
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 700,
      backgroundColor: "#E5E5E5",
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
    },
    chipArray: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "90%",
      marginTop: 35,
      marginBottom: 35,
    },
  }));

  const classes = useStyles();

  const setPlaceholder = () => {
    if (filter === "location") {
      return keys.search;
    }
    if (filter === "industry") {
      return "Seach by Industry";
    } else {
      return "Search";
    }
  };

  useEffect(() => {}, [search]);

  useEffect(() => {
    if (search.trim() !== "" && search.trim().length > 1) {
      let input = {};

      if (filter === "location") {
        input = { location: search };
      } else {
        input = { industry: search };
      }

      searchUsers(input).then((response) => {
        console.log(response);
        setResults(response.data);
      });
    } else {
      setResults([]);
    }
  }, [search]);

  // useEffect(() => {
  //   if (search === "") {
  //     setDisplay(true);
  //   }
  // }, [search]);

  useEffect(() => {
    setSearch("");
    setResults([]);
  }, [full]);

  if (displaySearch) {
    return (
      <div className={classes.container}>
        {/* <ClickAwayListener
        onClickAway={() => {
          setFull(false);
          setDisplay(true);
        }}
      > */}
        <div className={classes.searchContainer}>
          <TextField
            size="medium"
            value={search}
            className={classes.search}
            placeholder={truthy(keys.search)}
            id="input-with-icon-textfield"
            onClick={() => {
              setFull(true);
              setDisplay(false);
            }}
            onChange={(e) => {
              setSearch(e.target.value);
              setDisplay(false);
              setFull(true);
            }}
          />
          <ButtonGroup
            style={{ display: display ? "none" : "block" }}
            color="primary"
            aria-label="outlined secondary button group"
          >
            <Button
              style={{ textTransform: "none" }}
              onClick={() => setFilter("location")}
            >
              {truthy(keys.location)}
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => setFilter("industry")}
            >
              {truthy(keys.industry)}
            </Button>
          </ButtonGroup>
          {/* <div className={classes.chipArray}>
          <Chip
            onClick={() => setFilter("location")}
            icon={<RoomIcon />}
            label={"Location"}
            disabled={filter === "location"}
            className={classes.chip}
          />
          <Chip
            onClick={() => setFilter("industry")}
            disabled={filter === "industry"}
            label={"Industry"}
            className={classes.chip}
          />
        </div> */}
        </div>
        {/* </ClickAwayListener> */}

        {full ? (
          <IconButton
            className={classes.iconButton}
            onClick={() => {
              setFull(false);
              setDisplay(true);
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}

        {results.map((user) => {
          return <Card display={display} key={user._id} story={user} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Search;
