import React from "react";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { menuItems } from "./Header";

const DrawerSlide = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const drawerBtn = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={drawerBtn} anchor="left">
        <List>

          {menuItems.map((nav,index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText sx={{color:"#063970"}}>
              {nav.name}
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          ))}
          
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "whitesmoke" }}
        onClick={drawerBtn}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerSlide;
