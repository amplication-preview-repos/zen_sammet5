import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type BlockchainRecordUpdateInput = {
  blockchainHash?: string | null;
  document?: DocumentWhereUniqueInput | null;
  timestamp?: Date | null;
};
