export type HeaderPageType = "Home" | "Page";

export interface PageHeaderProps {
  pageTitle: string;
  subTitlePage: string;
  showSubcribeBox: boolean;
}

export interface HeaderSectionProps extends PageHeaderProps {
  typeHeader: HeaderPageType;
}
