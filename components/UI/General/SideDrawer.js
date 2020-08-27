import React from "react";
// Components
import List from "./List";
// Material UI
import Drawer from "@material-ui/core/Drawer";
import Menu from '@material-ui/core/Menu';

const SideDrawer = ({ open, setOpen, anchor }) => {
  const toggleDrawer = (value) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(value);
  };

  return (
    <div>
      <React.Fragment key={anchor}>
        <Menu style = {{marginTop: 15}}anchor={anchor}  anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    open={open} onClose={toggleDrawer(false)}>
          <List anchor={anchor} toggleDrawer={toggleDrawer} />
        </Menu>
      </React.Fragment>
    </div>
  );
};

export default SideDrawer;
