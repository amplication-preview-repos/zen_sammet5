import { BlockchainRecord as TBlockchainRecord } from "../api/blockchainRecord/BlockchainRecord";

export const BLOCKCHAINRECORD_TITLE_FIELD = "blockchainHash";

export const BlockchainRecordTitle = (record: TBlockchainRecord): string => {
  return record.blockchainHash?.toString() || String(record.id);
};
