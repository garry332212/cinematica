import DisplayItems from "../DisplayItems";
import { trendingShows, apiKey } from "../modules/ApiLinks";
import styled from "styled-components";
import CoverPage from "../CoverPage";
import tvshows from "../../assets/tvshows.avif";

const TvShows = () => {
  return (
    <TvShowsWrapper>
      <CoverPage headerImage={tvshows} showSearch={false} />
      <DisplayItems
        apiEndpoint={`${trendingShows}?api_key=${apiKey}`}
        itemHeading={"Trending Shows"}
        numberOfMovies={16}
        tvShowOn={true}
      />
    </TvShowsWrapper>
  );
};

export default TvShows;

const TvShowsWrapper = styled.div``;
