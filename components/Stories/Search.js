import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, InputAdornment } from "@material-ui/core";
import { searchUsers } from "./utils/searchUsers";
import Link from "next/link";
import Carousel from "./Carousel";
import { ClickAwayListener } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";

function Search({ setDisplay }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("industry");
  const [full, setFull] = useState(false);

  // TODO : Show close button only when there are results

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",

      width: 1100,
      height: full ? "100%" : "100%",
    },
    search: {
      width: "90%",
      fontFamily: "Poppins, sans serif",
    },
    searchContainer: {
      width: 1100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
      marginTop: 5,
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

  useEffect(() => {
    if (search === "") {
      setDisplay(true);
    }
  }, [search]);

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
            if (search === "") {
              setDisplay(true);
            }
            setSearch(e.target.value);
            setDisplay(false);
            setFull(true);
          }}
        />
        <div className={classes.chipArray}>
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
        </div>
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
        return <Carousel display={true} key={user._id} story={user} />;
      })}
    </div>
  );
}

export default Search;
