import { WalletCard } from "components";
import {
  ARABPriceIcon,
  BlockIcon,
  ProducerIcon,
  TotalTransactionIcon,
  WalletWrap,
} from "./styles";

const WalletContainer = () => {
  return (
    <WalletWrap>
      <div className="container">
        <div className="wallet-inner">
          <div className="row">
            <WalletCard
              headerIcon={ProducerIcon()}
              footerTitle="Abcdarab21a"
              title="Producer"
            />
            <WalletCard
              headerIcon={BlockIcon()}
              footerTitle="85,344,657"
              title="Block"
            />
            <WalletCard
              headerIcon={ARABPriceIcon()}
              footerTitle="0.22"
              title="ARAB Price"
              subTitle="ARAB"
            />
            <WalletCard
              headerIcon={TotalTransactionIcon()}
              footerTitle="230000000"
              title="Total Transaction"
              subTitle="ARAB"
            />
          </div>
        </div>
      </div>
    </WalletWrap>
  );
};

export default WalletContainer;
