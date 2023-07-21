import DisplayItems from "../DisplayItems";
import { now_playing, trendingShows } from "../modules/ApiLinks";
import nowPlaying from "../../assets/nowPlaying.jpeg";
import CommonStyles from "../CommonStyles";
import { ItemsCategory, createDisplayItems } from "./Home";

const displayCategories: ItemsCategory[] = [
  createDisplayItems(now_playing, "Now Playing", false),
  createDisplayItems(trendingShows, "Trending Shows", true),
];

const NowPlaying = () => {
  return (
    <>
      {/*//! Render Movies & Shows */}
      <CommonStyles
        headerImage={nowPlaying}
        showSearch={false}
        moviesCardComponent={displayCategories.map((category) => (
          <DisplayItems key={category.itemHeading} {...category} />
        ))}
      />
    </>
  );
};

export default NowPlaying;
