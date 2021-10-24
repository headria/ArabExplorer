import { Table } from "components";
import { useMemo } from "react";
import { Column } from "react-table";

const TopAccounts = () => {
  const columns = useMemo<Column[]>(
    () => [
      {
        Header: "Trx ID",
        accessor: "trxid",
      },
      {
        Header: "%",
        accessor: "percent",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",

        timestamp: "15 Minutes Ago",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",
      },
      {
        trxid: "C5bec6412b7b20f74827a",
        percent: "15%",
      },
    ],
    []
  );
  return <Table columns={columns} data={data} />;
};

export default TopAccounts;
