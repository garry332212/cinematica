import React from "react";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { menuItems } from "./Header";
import { NavLink } from "react-router-dom";

const DrawerSlide = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const drawerBtn = () => {
    setOpenDrawer(!openDrawer);
  };
  const CustomNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    
  }));
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={drawerBtn} anchor="left">
        <List>
          {menuItems.map((nav, index) => (
           <CustomNavLink to={nav.link} key={index}>
              <ListItemButton onClick={() => setOpenDrawer(false)} >
                <ListItemIcon>
                  <ListItemText sx={{ color: "#063970" }}>
                    {nav.name}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </CustomNavLink>
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
