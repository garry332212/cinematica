import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import { useMovieContext } from "./MovieContext";

const CarouselComponent: React.FC = () => {
  const { movies } = useMovieContext();

  return (
    <CarouselWrapper>
      <div className="carousel-wrapper">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={2}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          cssEase="linear"
          arrows={false}
          variableWidth={true}
         
          
         
        >
          {movies.map((movie) => (
            <div key={movie.id} className="movieSlider">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt=""
                className="carousel-image"
              />
              <div className="info">
                <h3>{movie.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default CarouselComponent;

const CarouselWrapper = styled.div`

  .carousel-wrapper {
 

  }
  .carousel-image {
    
  }

  .movieSlider {
    
    .info {
      position: absolute;
      top: 200px;
      color: white;
      text-shadow: 5px 5px 10px black;
      backdrop-filter: blur(5px); /* Adjust the blur radius as needed */
      background-color: rgba(
        0,
        0,
        0,
        0.5
      ); /* Adjust the background color and opacity as needed */
    }
  }
`;
