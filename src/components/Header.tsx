import React, { useState, useEffect } from "react";
import { NavbarWrapper } from "./styles.modules";
import {
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import DrawerSlide from "./DrawerSlide";
import { apiKey } from "./modules/ApiLinks";


//!Nav Links Name
export const menuItems = [
  { name: "Home" },
  { name: "Now Playing" },
  { name: "Popular" },
  { name: "This Week" },
  { name: "Tv Shows" },
];

interface HeaderWrapperProps {
  backgroundimage?: string;
}

const Header = () => {
  const [headerImage, setHeaderImage] = useState("");
  const [activePage, setActivePage] = useState(0); //active page

  const themes = useTheme();
  const isMatching = useMediaQuery(themes.breakpoints.down("md"));

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        if (randomMovie && randomMovie.backdrop_path) {
          const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
          setHeaderImage(imageUrl);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const CustomTabs = styled(Tabs)(() => ({
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent",
    },
  }));

  return (
    //   <CoverSection backgroundimage={headerImage}></CoverSection>

    <NavbarWrapper>
      <AppBar sx={{ backgroundColor: "#063970" }}>
        <Toolbar>
          <Typography className="logo">Cinematica</Typography>
          {isMatching ? (
            <>
              <DrawerSlide />
            </>
          ) : (
            <>
              <CustomTabs
                className="navLinks"
                textColor="inherit"
                value={activePage}
                onChange={(e, value) => setActivePage(value)}
              >
                {menuItems.map((nav, index) => (
                  <Tab
                    className={`links ${activePage === index ? "active" : ""}`}
                    key={index}
                    label={nav.name}
                  />
                ))}
              </CustomTabs>

              <Button
                className="loginBtn"
                variant="contained"
                color="info"
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};



// const CoverSection = styled.div<HeaderWrapperProps>`
//   background: ${(props) =>
//     props.backgroundimage ? `url(${props.backgroundimage})` : "none"};
//   background-size: cover;
//   background-position: center;
//   height: 30vh;
//   margin: auto;
//   > img {
//     position: relative;
//     z-index: 0;
//     object-fit: cover;
//     width: 100%;
//     height: 100%;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(
//       0,
//       0,
//       0,
//       0.5
//     ); /* Adjust the color and opacity as needed */
//     z-index: 2;
//   }
// `;

export default Header;
