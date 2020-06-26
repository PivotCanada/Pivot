import React from "react";
import Link from "next/link";
import { useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExploreIcon from "@material-ui/icons/Explore";
import TranslateIcon from "@material-ui/icons/Translate";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
// Hooks
import useLanguage from "../../../hooks/useLanguage";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

const MobileList = () => {
  const classes = useStyles();
  const { user, authenticated } = useContext(UserContext);
  const { keys, truthy, changeLanguage } = useLanguage({
    language: {
      english: "Français",
      french: "English",
    },
    about: {
      english: "About",
      french: "à Propos",
    },
    discover: {
      english: "Discover",
      french: "Decouvrir",
    },
    journey: {
      english: "My Journey",
      french: "Mon Histoire",
    },
  });

  return (
    <List>
      <Link href={"/about"}>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={truthy(keys.about)} />
        </ListItem>
      </Link>
      <Link href={"/"}>
        <ListItem>
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary={truthy(keys.discover)} />
        </ListItem>
      </Link>
      {authenticated ? (
        <Link href={`/profiles/${user._id}`}>
          <ListItem>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={truthy(keys.journey)} />
          </ListItem>
        </Link>
      ) : null}

      <ListItem onClick={() => changeLanguage()} button>
        <ListItemIcon>
          <TranslateIcon />
        </ListItemIcon>
        <ListItemText primary={truthy(keys.language)} />
      </ListItem>
      <Divider />
    </List>
  );
};

export default MobileList;
