import { BlockchainRecordWhereInput } from "./BlockchainRecordWhereInput";
import { BlockchainRecordOrderByInput } from "./BlockchainRecordOrderByInput";

export type BlockchainRecordFindManyArgs = {
  where?: BlockchainRecordWhereInput;
  orderBy?: Array<BlockchainRecordOrderByInput>;
  skip?: number;
  take?: number;
};
