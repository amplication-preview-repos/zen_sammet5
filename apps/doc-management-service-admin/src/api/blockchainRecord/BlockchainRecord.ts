import { Document } from "../document/Document";

export type BlockchainRecord = {
  blockchainHash: string | null;
  createdAt: Date;
  document?: Document | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
