import { FC } from "react";
import HomeHeader from "./HomeHeader";
import PageHeader from "./PageHeader";
import { HeaderContainer } from "./styles";
import { HeaderSectionProps } from "./types";

export const HeaderSection: FC<HeaderSectionProps> = ({
  typeHeader,
  pageTitle,
  subTitlePage,
  showSubcribeBox,
}) => {
  return (
    <HeaderContainer>
      {typeHeader === "Home" ? (
        <HomeHeader />
      ) : (
        <PageHeader
          pageTitle={pageTitle}
          subTitlePage={subTitlePage}
          showSubcribeBox={showSubcribeBox}
        />
      )}
    </HeaderContainer>
  );
};
