import React from "react";
// Components
import List from "./List";
// Material UI
import Drawer from "@material-ui/core/Drawer";

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
        <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
          <List anchor={anchor} toggleDrawer={toggleDrawer} />
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SideDrawer;
