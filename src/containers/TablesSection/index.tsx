import Card from "components/cards/Card";
import React from "react";
import Blocks from "./Blocks";
import LastestTransactions from "./LastestTransactions";
import { GridContainer } from "./styles";
import TopAccounts from "./TopAccounts";

const TablesSection = () => {
  return (
    <GridContainer>
      <div className="container">
        <div className="grid-layout">
          <Card
            className="table-last-transaction"
            title="Lastest Transaction"
            footerTitle="View More"
            footerUrl="/"
          >
            <LastestTransactions />
          </Card>
          <Card
            className="table-top-account"
            title="Top Accounts"
            footerTitle="View More"
            footerUrl="/"
          >
            <TopAccounts />
          </Card>
          <Card
            className="table-block"
            title="Blocks"
            footerTitle="View More"
            footerUrl="/"
          >
            <Blocks />
          </Card>
        </div>
      </div>
    </GridContainer>
  );
};

export default TablesSection;
