import React, { FC } from "react";
import { CardContainer } from "./styled";

interface CardProps {
  title?: string;
  footerUrl?: string;
  footerTitle?: string;
  className?: string;
}
const Card: FC<CardProps> = ({
  className,
  children,
  footerTitle,
  title,
  footerUrl,
}) => {
  return (
    <CardContainer className={className}>
      {title && <div className="table-title">{title}</div>}
      {children && (
        <div className="table-inner table-responsive">{children}</div>
      )}
      {footerTitle && (
        <div className="table-footer">
          <a href={footerUrl} className="btn btn-link">
            {footerTitle}
          </a>
        </div>
      )}
    </CardContainer>
  );
};

export default Card;
