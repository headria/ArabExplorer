import { Table } from "components";
import { useMemo } from "react";
import { Column } from "react-table";

const Blocks = () => {
  const columns = useMemo<Column[]>(
    () => [
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Transaction",
        accessor: "transaction",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Votes",
        accessor: "votes",
      },
      {
        Header: "Rewards Per Day",
        accessor: "rewaedsperday",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        rank: 1,
        name: "Paige Turner",
        transaction: "385,604,917",
        status: "Active",
        votes: "3.183 %	",
        rewaedsperday: "1008.1865",
      },
      {
        rank: 2,
        name: "Paige Turner",
        transaction: "385,604,917",
        status: "Active",
        votes: "3.183 %	",
        rewaedsperday: "1008.1865",
      },
      {
        rank: 3,
        name: "Paige Turner",
        transaction: "385,604,917",
        status: "Active",
        votes: "3.183 %	",
        rewaedsperday: "1008.1865",
      },
      {
        rank: 1,
        name: "Paige Turner",
        transaction: "385,604,917",
        status: "Active",
        votes: "3.183 %	",
        rewaedsperday: "1008.1865",
      },
      {
        rank: 2,
        name: "Paige Turner",
        transaction: "385,604,917",
        status: "Active",
        votes: "3.183 %	",
        rewaedsperday: "1008.1865",
      },
      {
        rank: 3,
        name: "Paige Turner",
        transaction: "385,604,917",
        status: "Active",
        votes: "3.183 %	",
        rewaedsperday: "1008.1865",
      },
    ],
    []
  );
  return <Table columns={columns} data={data} />;
};

export default Blocks;
