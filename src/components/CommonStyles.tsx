import React from "react";
import CoverPage from "./CoverPage";
// import { CoverProps } from "./CoverPage";

interface CommonStylesProps {
  headerImage: string;
  title: string;
  description: string;
  catchyPhrase: string;
  showSearch: boolean;
  showHeaderImage: boolean;
  displayCardComponent: React.ReactNode;
  
}
const CommonStyles: React.FC<CommonStylesProps> = ({
  headerImage,
  title,
  description,
  catchyPhrase,
  showSearch,
  showHeaderImage,
  displayCardComponent,
  
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

      {displayCardComponent}

      
    </>
  );
};

export default CommonStyles;
