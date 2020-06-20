import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, InputAdornment } from "@material-ui/core";
import { searchUsers } from "./utils/searchUsers";
import { Button, ButtonGroup } from "@material-ui/core";

import PreviewCard from "../Profile/PreviewCard";

import { ClickAwayListener } from "@material-ui/core";

function Search({ setDisplay, display }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("location");
  const [full, setFull] = useState(false);

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
      return "Search by Location";
    }
    if (filter === "industry") {
      return "Seach by Industry";
    } else {
      return "search";
    }
  };

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
          placeholder={setPlaceholder()}
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
            Location
          </Button>
          <Button
            style={{ textTransform: "none" }}
            onClick={() => setFilter("industry")}
          >
            Industry
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
        return <PreviewCard display={display} key={user._id} story={user} />;
      })}
    </div>
  );
}

export default Search;
