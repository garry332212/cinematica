import styled from "styled-components";
import { fontFamily, sizes } from "./modules/themes";

export const HomeContainer = styled.div``;

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
  .logo,
  .links,
  .loginBtn {
    transition: font-size 0.7s ease-in-out;
  }
  .logo {
    color: #fff;
    font-family: ${fontFamily.shadowsIntoLight};
    font-size: 3rem;
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

  .navLinks a.active {
    border-radius: 10px;
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    color: #ffffff;
    font-weight: bolder;
  }

  .links {
    margin: 0 20px;
    font-family: ${fontFamily.Acme};
    font-size: 18px;
    color: #ffffffe4;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
    padding: 0;

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
      font-size: 12px;
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

//!Cover Image @HomePage
export const Cover = styled.div`
  text-align: center;
  width: 80%;
  margin: 18px auto 0;
  transition: all 0.5s ease-in-out;
  position: relative;

  .coverText {
    position: absolute;
    color: white;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    text-shadow: 1px 1px 3px black;

    > h1 {
      font-size: 3rem;
      font-family: ${fontFamily.roboto};
    }
    > p {
      font-size: 24px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(3, 37, 65, 0.8);
  }

  > img {
    height: 500px;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 1060px) {
    width: 90%;
    margin: auto;

    > img {
      height: 50vh;
    }

    .coverText {
      top: 50%;
      > h1 {
        font-size: 2rem;
        font-family: ${fontFamily.roboto};
      }
      > p {
        font-size: 16px;
      }
      > em {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    > img {
      height: 25vh;
    }
    .coverText {
      top: 50%;

      > h1 {
        font-size: 1.7rem;
      }
      > p {
        font-size: 10px;
      }
      > em {
        font-size: 7px;
      }
    }
  }
  @media (max-width: 459px) {
    .coverText {
      > h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

//!HEADER Styles ENDS!!

//*SearchBar

export const SearchBar = styled.div`
  > input,
  > button {
    margin: auto;
    outline: none;
    border: none;
    border-radius: 20px;
    position: absolute;
    top: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: all 0.5s ease-in-out;
  }
  > input {
    height: 45px;
    width: 70%;
    box-shadow: 1px 1px 6px 2px grey;
    padding: 10px;
    left: 50%;
    font-size: 22px;
    &::placeholder {
      font-size: 16px;
    }

    @media (max-width: 600px) {
      font-size: 18px;
      width: 80%;
      &::placeholder {
        font-size: 9px;
      }
    }
    @media (max-width: 370px) {
      width: 80%;
      height: 35px;
      &::placeholder {
       font-size: 0;
      }
    }
  }

  > button {
    height: 46px;
    padding: 0 25px;
    left: 82%;
    font-size: 15px;
    background: linear-gradient(
      90deg,
      rgba(15, 255, 184, 1) 33%,
      rgba(7, 110, 112, 1) 100%
    );
    cursor: pointer;
    font-weight: bolder;
    @media (max-width: 600px) {
      font-size: 13px;
      padding: 0 26.8px;
    }
    @media (max-width: 370px) {
      height: 35px;
      padding: 0 20px;
      left:80%;
      font-size: 11px;
    }
  }
`;

//*MoviesCard Style Starts

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 13px 2px #f3614010;
  border-radius: 10px;

  
  .titleCard {
    border-bottom: 2px solid red;
    margin: 2rem;
    h1 {
      margin-top:15px;
      font-family: ${fontFamily.Acme};
      > span {
        font-size: ${sizes.medium};
        font-family: ${fontFamily.roboto};
        font-weight: 400;
      }
    }
  }
  .movieCard {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .movie {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .movieImg {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > img {
          border-radius: 10px;
          border-bottom-right-radius: 22px;
          box-shadow: 1px 1px 10px 1px #000000;
          box-sizing: border-box;
          padding: 4px;
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
  }

  .movieInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    position: relative;
    bottom: 10px;
    > h4 {
      margin-bottom: 0;
      width: 230px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > p {
      margin: 8px 0;
      color: gray;
      border-bottom: 1px solid grey;
    }
  }
  @media (max-width: 1610px) {
    .movieCard {
      .movieImg {
        > img {
          height: 210px;
        }
      }
    }

    .movieInfo {
      > h4 {
        width: 170px;
      }
      > p {
        margin: 5px 0;
      }
    }
  }

  @media (max-width: 1060px) {
    .movieCard {
      margin: 0 5px;

      .movieImg {
        > img {
          height: 200px;
          width: 150;
        }
      }
    }
    .movieInfo {
      > h4 {
        width: 150px;
      }
    }
  }

  @media (max-width: 600px) {
    .titleCard {
      h1 {
        font-size: 25px;
        > span {
          font-size: 14px;
        }
      }
    }
    .movieImg {
      > img {
        padding: 4px;
      }
      > span {
        height: 30px;
        width: 30px;
        font-size: 12px;
      }
    }

    .movieInfo {
      > h4 {
        font-size: 14px;
      }
      > p {
        font-size: 14px;
      }
    }
  }
`;

//!MoviesCard Style ENDS!!
