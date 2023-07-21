import {
  trendingShows,
  airing_today,
  top_rated_shows,
  popularShows,
  
} from "../modules/ApiLinks";
import tvshows from "../../assets/tvshows.avif";
import RenderMoviesShows from "../RenderMoviesShows";
import { ItemsCategory, createDisplayItems } from "./Home";

const displayCategories: ItemsCategory[] = [
  createDisplayItems(trendingShows, "Trending Shows", true, false),
  createDisplayItems(airing_today, "Watch On Tv 📺", true, false),
  createDisplayItems(popularShows, "Popular", true, true),
  createDisplayItems(top_rated_shows, "Top Rated Shows", true, true),
];

const coverImageProps = {
  showSearch: false,
  title: "Enter the TV Show Wonderland",
  description: "",
  catchyPhrase: "",
};

const TvShows = () => {
  return (
    <>
      <RenderMoviesShows
        displayCategories={displayCategories}
        headerImage={tvshows}
        {...coverImageProps}
      />
    </>
  );
};

export default TvShows;
