import React from "react";
import { NavbarWrapper } from "./CSS/styles.modules";
import {
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DrawerSlide from "./DrawerSlide";

//!Nav Links Name
export const menuItems = [
  { name: "Home", link: "/" },
  { name: "Now Playing", link: "now_playing" },
  { name: "Popular", link: "popular" },
  { name: "Tv Shows", link: "tv_shows" },
];

const Header = () => {
  const themes = useTheme();
  const isMatching = useMediaQuery(themes.breakpoints.down("md"));

  return (
    <React.Fragment>
      <NavbarWrapper>
        <AppBar
          sx={{
            padding: "5px",
            backgroundColor: "#063970",
            marginBottom: "3rem",
          }}
        >
          <Toolbar>
            <Typography className="logo">Cinematica</Typography>
            {isMatching ? (
              <>
                <DrawerSlide />
              </>
            ) : (
              <>
                <Tabs className="navLinks">
                  {menuItems.map((nav, index) => (
                    <NavLink to={nav.link} key={index}>
                      <Tab className="links" label={nav.name} />
                    </NavLink>
                  ))}
                </Tabs>

                <Button className="loginBtn" variant="contained" color="info">
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </NavbarWrapper>
    </React.Fragment>
  );
};

export default Header;
