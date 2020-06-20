import React from "react";
import Link from "next/link";
import { useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import EditIcon from "@material-ui/icons/Edit";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

const DrawerList = ({ anchor, toggleDrawer }) => {
  const classes = useStyles();
  const { setShowEdit, setShowDelete, setShowCreate } = useContext(
    ModalContext
  );

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link href={"/"}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <ListItem button onClick={() => setShowCreate(true)}>
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText primary={"Create"} />
        </ListItem>
        <ListItem button onClick={() => setShowEdit(true)}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary={"Edit Account"} />
        </ListItem>
        <ListItem button onClick={() => setShowDelete(true)}>
          <ListItemIcon>
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemText primary={"Delete Account"} />
        </ListItem>
        <Link href={"/logout"}>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );
};

export default DrawerList;
