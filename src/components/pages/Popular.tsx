import { popular, popularShows } from "../modules/ApiLinks";
import popularMovies from "../../assets/popular_movies.avif";
import RenderMoviesShows from "../RenderMoviesShows";
import { ItemsCategory, createDisplayItems } from "./Home";

 //RenderMoviesShows props values for Popular
const popularProps = {
  headerImage: popularMovies,
  showSearch: true,
  showHeaderImage:true,
  title: "All time blockbusters Movies/Shows ",
  description:
    "Lights, Camera, Action! Exploring the Blockbusters: Unveiling the Magic of Popular Movies/Shows!",
  catchyPhrase: "see what's popular now!!",
};

//control what to display in RenderMoviesShow component when called in Popular.tsx
const displayCategories: ItemsCategory[] = [
  createDisplayItems(popular, "Popular Movies", false, true),
  createDisplayItems(popularShows, "Trending Shows", true, true),
];
const Popular = () => {
  return (
    <RenderMoviesShows
      displayCategories={displayCategories}
      {...popularProps}
    />
  );
};

export default Popular;
