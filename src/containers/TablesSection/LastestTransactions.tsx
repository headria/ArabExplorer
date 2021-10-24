import { Table } from "components";
import { useMemo } from "react";
import { Column } from "react-table";

const LastestTransactions = () => {
  const columns = useMemo<Column[]>(
    () => [
      {
        Header: "Trx ID",
        accessor: "trxid",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Timestamp",
        accessor: "timestamp",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        amount: "55577.14164828 ARAB",
        timestamp: "15 Minutes Ago",
      },
    ],
    []
  );
  return <Table columns={columns} data={data} />;
};

export default LastestTransactions;
