import ShowCard from "../ShowsCard";
import { trendingShows, apiKey } from "../modules/ApiLinks";
import styled from "styled-components";
import CoverPage from "../CoverPage";
import tvshows from "../../assets/tvshows.avif";

const TvShows = () => {
  return (
    <TvShowsWrapper>
      <CoverPage headerImage={tvshows} showSearch={false} />
      <ShowCard
        apiEndpoint={`${trendingShows}?api_key=${apiKey}`}
        showHeading={"Trending Shows"}
        numberOfMovies={16}
      />
    </TvShowsWrapper>
  );
};

export default TvShows;

const TvShowsWrapper = styled.div``;
