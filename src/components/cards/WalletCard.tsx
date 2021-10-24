import { FC } from "react";
import { CardWalletContainer } from "./styled";

interface CardWalletProps {
  title?: string;
  subTitle?: string;
  footerTitle?: string;
  headerIcon?: JSX.Element;
}
const WalletCard: FC<CardWalletProps> = ({
  title,
  subTitle,
  footerTitle,
  headerIcon,
}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
      <CardWalletContainer>
        <div className="card-wallet">
          <div className="card-inner">
            {title && <h2 className="title">{title}</h2>}
            <div className="info">
              {subTitle && <span className="arb">{subTitle}</span>}
              {footerTitle && <div className="number">{footerTitle}</div>}
            </div>
            {headerIcon && <div className="icon">{headerIcon}</div>}
          </div>
        </div>
      </CardWalletContainer>
    </div>
  );
};

export default WalletCard;
