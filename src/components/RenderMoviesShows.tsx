import DisplayItems from "./DisplayItems";
import CommonStyles from "./CommonStyles";
import { ItemsCategory } from "./pages/Home";

interface MoviesCategoriesProps {
  displayCategories: ItemsCategory[]; // Add displayCategories prop
  headerImage: string;
  showSearch: boolean;
  showHeaderImage:boolean;
  
  title: string;
  description: string;
  catchyPhrase: string;
}

const RenderMoviesShows: React.FC<MoviesCategoriesProps> = ({
  displayCategories,
  headerImage,
  showHeaderImage,
  title,
  showSearch,
  description,
  catchyPhrase,
}) => {
  const coverProps = {
    showSearch,
    showHeaderImage,
    title,
    description,
    catchyPhrase,
    
  };
  return (
    <>
      <CommonStyles
        headerImage={headerImage}
        {...coverProps}
        displayCardComponent={displayCategories.map((category) => (
          <DisplayItems key={category.itemHeading} {...category} />
        ))}
      />
    </>
  );
};

export default RenderMoviesShows;
