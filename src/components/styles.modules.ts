import styled from "styled-components";
import { fontFamily, sizes } from "./modules/themes";

//*HEADER Styles Starts
export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  //common styles:
  .logo, .links, .loginBtn{
    transition: font-size .7s ease-in-out;
  }
  .logo {
    color: #fff;
    font-family: ${fontFamily.shadowsIntoLight};
    font-size: 2.5rem;
    letter-spacing: 8px;
    color: #fff;
    background: linear-gradient(
      to right,
      #eaff00,
      #f8d4d4
    ); /* Adjust the gradient colors as needed */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .navLinks,
  .loginBtn {
    margin-left: auto;
  }

  .links {
    margin: 0 20px;
    font-family: ${fontFamily.Acme};
    font-size: 18px;
    color: #ffffffe4;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
    padding: 0;
    letter-spacing: 2px;

    &.active {
      /* background: linear-gradient(to left, #ffff00 10%, #ff3399 100%); */
      border-top: 2px solid red;
      border-bottom: 2px solid red;
      color: #ffffff;
      font-weight: bolder;
    }

    &:not(.active):hover {
      transform: scale(1.07);
      cursor: pointer;
      color: #eaff00;
    }
  }


  @media (max-width: 1060px) {
    .logo {
      font-size: 2rem;
    }

    .links,
    .loginBtn {
      font-size: 13px;
    }
  }

  @media (max-width: 960px) {
    .links {
      margin: 0 5px;
    }

    .loginBtn {
      font-size: 10px;
    }
  }
`;

//!HEADER Styles ENDS!!

//*MoviesCard Style Starts

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 13px 2px #f3614010;
  border-radius: 10px;
  margin-bottom: 2rem;

  @media (max-width: 1060px) {
  }

  @media (max-width: 960px) {
  }
`;

export const TitleCard = styled.div`
  width: 100%;
  h1 {
    margin: 10px 50px;
    font-family: ${fontFamily.Acme};
    > span {
      font-size: ${sizes.medium};
      font-family: ${fontFamily.roboto};
      font-weight: 400;
    }
  }
`;

export const MovieCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  .movie {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1060px) {
      flex-basis: 20%;
    }

    .movieImg {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > img {
        border-radius: 10px;
        border-bottom-right-radius: 22px;
        box-shadow: 1px 1px 10px 1px #000000;
      }
      > span {
        border: none;
        height: 35px;
        width: 35px;
        border-radius: 360px;
        background: #f76429;
        backdrop-filter: blur(20px);

        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        color: #ffffff;
        padding: 5px;
        font-family: ${fontFamily.rating};
        font-size: 15px;
        position: relative;
        bottom: 20px;
      }
    }
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  position: relative;
  bottom: 10px;
`;

export const MovieTitle = styled.h4`
  margin-bottom: 0;
  width: 230px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MovieDate = styled.p`
  margin: 8px 0;
  color: gray;
  border-bottom: 1px solid grey;
`;

//!MoviesCard Style ENDS!!
