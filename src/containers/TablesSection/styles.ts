import styled from "styled-components/macro";

export const GridContainer = styled.div`
  margin-bottom: 4rem;
  .grid-layout {
    display: grid;
    grid-template-columns: auto 400px;
    grid-template-areas: "tableLastTrans tableTopAccount" "tableBlock tableBlock";
  }
  .table-last-transaction {
    grid-area: tableLastTrans;
    padding-right: 15px;
  }
  .table-top-account {
    grid-area: tableTopAccount;
    padding-left: 15px;
  }
  .table-block {
    grid-area: tableBlock;
  }
`;
