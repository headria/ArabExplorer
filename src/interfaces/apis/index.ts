export interface Params {
  records_count?: number;
  show_empty?: boolean;
}
export type BlockType = {
  block_id: string;
  block_num: string;
  timestamp: string;
  transaction_count: number;
  producer: string;
};

export type TransactionType = {
  transactionId: string;
  blockNumber: string;
  timestamp: string;
};

export type AccountType = {
  trxId: string;
  percent: string;
};
