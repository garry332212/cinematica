import DisplayItems from "../DisplayItems";
import { popular, apiKey, popularShows } from "../modules/ApiLinks";
import popularMovies from "../../assets/popular_movies.avif";
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
        <DisplayItems
          apiEndpoint={`${popular}?api_key=${apiKey}`}
          numberOfMovies={16}
          itemHeading="Popular Movies"
          moviesOn={true}
        />
      }
      showsCardComponent={
        <DisplayItems
          apiEndpoint={`${popularShows}?api_key=${apiKey}`}
          numberOfMovies={16}
          itemHeading="Popular Shows"
          tvShowOn={true}
        />
      }
    />
  );
};

export default Popular;
