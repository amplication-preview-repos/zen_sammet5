import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type BlockchainRecordCreateInput = {
  blockchainHash?: string | null;
  document?: DocumentWhereUniqueInput | null;
  timestamp?: Date | null;
};
