import MoviesCard from "../MoviesCard";
import { apiKey, now_playing, trendingShows } from "../modules/ApiLinks";
import nowPlaying from "../../assets/nowPlaying.jpeg";
import CommonStyles from "../CommonStyles";
import ShowCard from "../ShowsCard";

const NowPlaying = () => {
  return (
    <>
      <CommonStyles
        headerImage={nowPlaying}
        showSearch={false}
        moviesCardComponent={
          <MoviesCard
            apiEndpoint={`${now_playing}?api_key=${apiKey}`}
            numberOfMovies={16}
            movieHeading="Now Playing"
            showButtons={false}
          />
        }
      />
      <CommonStyles
        showSearch={false}
        showHeaderImage={false}
        showsCardComponent={
          <ShowCard
            apiEndpoint={`${trendingShows}?api_key=${apiKey}`}
            numberOfMovies={16}
            showHeading="Now Streaming"
          />
        }
      />
    </>
  );
};

export default NowPlaying;
