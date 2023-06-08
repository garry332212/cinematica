import React from "react";
import styled from "styled-components";
import film from "../assets/film.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="navbar">
        <div className="logo">
          <img src={film} alt="" />
          <span>Cinematica</span>
        </div>
        <div className="navlinks">
          <ul>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Popular</li>
            <li>Now Playing</li>
            <li>Upcoming</li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");

  .header {
    margin-bottom: 3rem;
  }
  .navbar {
    background: #f7f6f6;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 2px #f0f0f0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    font-family: "Roboto", sans-serif;
  }

  .logo {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
 

    > span {
      font-size: 2.5rem;
      font-family: "Shadows Into Light", cursive;
      margin-right: 10px;
   
    
    }

    img {
      height: 50px;
    }
  }

  .navlinks {
    font-size: 22px;
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;

      li {
        padding: 0 20px;
      }
    }
  }
`;
