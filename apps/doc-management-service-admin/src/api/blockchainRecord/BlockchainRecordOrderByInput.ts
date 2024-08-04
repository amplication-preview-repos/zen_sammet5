import { SortOrder } from "../../util/SortOrder";

export type BlockchainRecordOrderByInput = {
  blockchainHash?: SortOrder;
  createdAt?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
