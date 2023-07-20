import React from "react";
import { Cover, SearchBar } from "./CSS/styles.modules";

interface CoverProps {
  title?: string;
  description?: string;
  catchyPhrase?: string;
  headerImage?: string;
  showSearch?: boolean;
  showHeaderImage?: boolean;
}

const CoverPage: React.FC<CoverProps> = ({
  title,
  description,
  catchyPhrase,
  headerImage,
  showSearch = true,
  showHeaderImage = true,
}) => {
  return (
    <Cover>
      <div className="coverText">
        <h1>{title}</h1>

        <p>{description}</p>
        <em>{catchyPhrase}</em>
      </div>
      {showHeaderImage && <img src={headerImage} alt="" />}

      {showSearch && (
        <SearchBar>
          <input
            type="search"
            placeholder="Search for movies, Tv shows and more..."
          />
          <button>Search</button>
        </SearchBar>
      )}
    </Cover>
  );
};

export default CoverPage;
