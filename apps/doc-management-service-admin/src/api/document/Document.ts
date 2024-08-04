import { AccessControl } from "../accessControl/AccessControl";
import { BlockchainRecord } from "../blockchainRecord/BlockchainRecord";
import { Upload } from "../upload/Upload";
import { User } from "../user/User";

export type Document = {
  accessControls?: Array<AccessControl>;
  blockchainRecords?: Array<BlockchainRecord>;
  content: string | null;
  createdAt: Date;
  hash: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  uploads?: Array<Upload>;
  user?: User | null;
};
