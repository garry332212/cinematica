import React from "react";
import CoverPage from "./CoverPage";

interface CoverProps {
  headerImage?: string;
  title?: string;
  description?: string;
  catchyPhrase?: string;
  showSearch?: boolean;
  showHeaderImage?: boolean;
  moviesCardComponent?: React.ReactNode;
  showsCardComponent?: React.ReactNode;
}
const CommonStyles: React.FC<CoverProps> = ({
  headerImage,
  title,
  description,
  catchyPhrase,
  showSearch,
  showHeaderImage,
  moviesCardComponent,
  showsCardComponent,
}) => {
  return (
    <>
      <CoverPage
        headerImage={headerImage}
        title={title}
        description={description}
        catchyPhrase={catchyPhrase}
        showSearch={showSearch}
        showHeaderImage={showHeaderImage}
      />

      {moviesCardComponent}

      {showsCardComponent}
    </>
  );
};

export default CommonStyles;
