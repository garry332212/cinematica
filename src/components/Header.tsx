import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface HeaderWrapperProps {
  backgroundImage?: string;
}

const Header = () => {
  const [headerImage, setHeaderImage] = useState('');

  useEffect(() => {
    const apiKey = 'a2006311928939b35613c28405038c87'; // Replace with your actual API key

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const movies = data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        if (randomMovie && randomMovie.backdrop_path) {
          const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
          setHeaderImage(imageUrl);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <HeaderWrapper>
      <NavbarWrapper>
        <div className="logo">
          <img src="https://static1.squarespace.com/static/52fafde3e4b052e52daa7aa8/t/58cf47d9e3df28b242b1f488/1489979365977/cinematica_logo_new_eroded.png?format=1500w" alt="" />
        </div>

        <div className="navLinks">
          <ul>
            <li>Now Playing</li>
            <li>Popular</li>
            <li>This Week</li>
            <li>This Week</li>
          </ul>
        </div>
      </NavbarWrapper>

      <CoverSection  backgroundImage={headerImage}>

      </CoverSection>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`

`;

const NavbarWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;;
  .logo {
    
    > img {
      height: 80px;
    }
  }
  .navLinks{
    >ul{
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      
    }
  }

`;
const CoverSection = styled.div<HeaderWrapperProps>`
  background: ${props => (props.backgroundImage ? `url(${props.backgroundImage})` : 'none')};
  background-size:cover;
  background-position: center;
  height: 70vh;
  width: 98%;
  margin: auto;  /* Add any other styles for the header wrapper */
`;



export default Header;