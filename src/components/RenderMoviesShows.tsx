import DisplayItems from "./DisplayItems";
import CommonStyles from "./CommonStyles";
import { ItemsCategory } from "./pages/Home";

interface MoviesCategoriesProps {
  displayCategories: ItemsCategory[]; // Add displayCategories prop
  headerImage: string;
  showSearch: boolean;
  
  title: string;
  description: string;
  catchyPhrase: string;
}

const RenderMoviesShows: React.FC<MoviesCategoriesProps> = ({
  displayCategories,
  headerImage,
  title,
  showSearch,
  description,
  catchyPhrase,
}) => {
  const coverProps = {
    showSearch,
    title,
    description,
    catchyPhrase,
  };
  return (
    <>
      <CommonStyles
        headerImage={headerImage}
        {...coverProps}
        moviesCardComponent={displayCategories.map((category) => (
          <DisplayItems key={category.itemHeading} {...category} />
        ))}
      />
    </>
  );
};

export default RenderMoviesShows;
