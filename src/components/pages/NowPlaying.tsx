import { now_playing, trendingShows } from "../modules/ApiLinks";
import nowPlaying from "../../assets/nowPlaying.jpeg";
import { ItemsCategory, createDisplayItems } from "./Home";
import RenderMoviesShows from "../RenderMoviesShows";


//control what to display in RenderMoviesShow component when called in NowPlayng.tsx
const displayCategories: ItemsCategory[] = [
  createDisplayItems(now_playing, "Now Playing", false,false),
  createDisplayItems(trendingShows, "Now Streaming", true,false),
];

 //For RenderMoviesShows props values for NowPlaying
const coverImageProps = {
  headerImage: nowPlaying,
  showSearch: false,
  showHeaderImage:true,
  title: "What's Playing Now!",
  description:
    "Find the latest movies/shows currently playing",
  catchyPhrase:
    "In Cinemas & Streaming Now",
};

const NowPlaying = () => {
  return (
    <>
     <RenderMoviesShows displayCategories={displayCategories}
     {...coverImageProps}
     />
    </>
  );
};

export default NowPlaying;
