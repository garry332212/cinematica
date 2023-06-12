import MoviesCard from "../../MoviesCard";
import CarouselComponent from "../Carousel";
import { styled } from "styled-components";
import { MovieProvider } from "../MovieContext";
import {
  apiKey,
  popular,
  this_week,
  top_rated_movies,
  upcoming,
} from "../modules/ApiLinks";

const Home = () => {
  return (
    <>
      <ImageSlider>
        <MovieProvider apiEndpoint={this_week}>
          <CarouselComponent />
        </MovieProvider>
      </ImageSlider>

      <MoviesCard apiEndpoint={`${upcoming}?api_key=${apiKey}`} />
      <MoviesCard apiEndpoint={`${this_week}?api_key=${apiKey}`} />
      <MoviesCard apiEndpoint={`${popular}?api_key=${apiKey}`} />
      <MoviesCard apiEndpoint={`${top_rated_movies}?api_key=${apiKey}`} />
    </>
  );
};

export default Home;

const ImageSlider = styled.div`
  margin-bottom: 3rem;

  .slick-slider {
  border-radius: 10px;
}

`;
