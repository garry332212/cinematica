import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fontFamily } from "./modules/themes";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const menuItems = [
  { name: "Now Playing" },
  { name: "Popular" },
  { name: "This Week" },
  { name: "Tv Shows" },
];

interface HeaderWrapperProps {
  backgroundImage?: string;
}

const Header = () => {
  const [headerImage, setHeaderImage] = useState("");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const apiKey = "a2006311928939b35613c28405038c87"; 

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

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <HeaderWrapper>
      <NavbarWrapper>
        <div className="logo">
          {/* <img
            src={film}
            alt=""
          /> */}
          <h1>Cinematica</h1>
        </div>

        <div className="navLinks">
          <ul className="desktopMenu">
            {menuItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>

          <IconButton className="mobileMenuIcon" onClick={toggleDrawer(true)}>
            <MenuIcon color="warning"/>
          </IconButton>
          <CustomDrawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <CustomListItem
            key={index}
            onClick={toggleDrawer(false)}
          >
            <CustomListItemText primary={item.name} />
          </CustomListItem>
        ))}
      </List>
    </CustomDrawer>
        </div>
      </NavbarWrapper>

      <CoverSection backgroundImage={headerImage}></CoverSection>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: relative;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  .logo {
    /* > img {
      height: 100px;
      margin: 20px;
    } */

    > h1 {
      color: #fff;
      font-family: ${fontFamily.shadowsIntoLight};
      font-size: 4rem;
      letter-spacing: 8px;
      color: #fff;
      letter-spacing: 8px;
      background: linear-gradient(
        to right,
        #ff4d00,
        #d4d4f8
      ); /* Adjust the gradient colors as needed */
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 20px
    }
  }

  .navLinks {
    display: flex;
    align-items: center;

    > ul.desktopMenu {
      list-style: none;
      display: flex;
      align-items: center;

      > li {
        margin: 10px 20px;
        font-family: ${fontFamily.Acme};
        font-size: 25px;
        color: #ffffffe4;
        padding: 5px 10px;
        background: #0000001e;
        border-radius: 5px;
        transition: transform 0.1s ease-in-out;

        &:hover {
          transform: scale(1.05);
          cursor: pointer;
          background: linear-gradient(to right, #ffff00 10%, #ff3399 100%);
          color: black;
         
        }
      }
    }

    > .mobileMenuIcon {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    .navLinks {
      > ul.desktopMenu {
        list-style: none;
        display: flex;
        align-items: center;
        > li {
          font-size: 15px;
        }
      }
    }

    .logo {
 

    > h1 {
      color: #fff;
      font-family: ${fontFamily.shadowsIntoLight};
      font-size:2.5rem;
      letter-spacing: 5px;
      
    }
  }
  }

  @media (max-width: 728px) {
    .logo {
      > h1 {
        /* font-size: 28px; */
      }
    }

    .navLinks {
      > ul.desktopMenu {
        display: none;
      }

      > .mobileMenuIcon {
        display: block;
      }
    }
  }
`;

const CoverSection = styled.div<HeaderWrapperProps>`
  background: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: auto;
  > img {
    position: relative;
    z-index: 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Adjust the color and opacity as needed */
    z-index: 2;
  }

`;

const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #f0f0f0; /* Customize the background color */
     padding: 10px;
  }
`;

const CustomListItem = styled(ListItem)`
  /* Customize the styles for each ListItem */
  && {
   
    background-color: #ffffff;
    color: #333333;
    /* Add additional styles as needed */
  }
`;

const CustomListItemText = styled(ListItemText)`
  /* Customize the styles for the ListItemText */
  && {
  
  }
`;

export default Header;
