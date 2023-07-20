import MoviesCard from "../MoviesCard";
import { popular, apiKey, popularShows } from "../modules/ApiLinks";
import popularMovies from "../../assets/popular_movies.avif";
import ShowsCard from "../ShowsCard";
import CommonStyles from "../CommonStyles";

const popularProps = {
  showButtons: false,
  showSearch: true,
  title: "All time blockbusters Movies/Shows ",
  description:
    "Lights, Camera, Action! Exploring the Blockbusters: Unveiling the Magic of Popular Movies/Shows!",
  
};
const Popular = () => {
  return (
    <CommonStyles
      headerImage={popularMovies}
      {...popularProps}
      moviesCardComponent={
        <MoviesCard
          apiEndpoint={`${popular}?api_key=${apiKey}`}
          numberOfMovies={16}
          movieHeading="Popular Movies"
        />
      }
      //todo: this can be removed because we are already passing the props so we can sinply use MoviesCard and pass the props we are pasing <ShowCard /> and delete ShowCard
      showsCardComponent={
        <ShowsCard
          apiEndpoint={`${popularShows}?api_key=${apiKey}`}
          numberOfMovies={16}
          showHeading="Popular Shows"
        />
      }
    />
  );
};

export default Popular;
