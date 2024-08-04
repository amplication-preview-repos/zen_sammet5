import { Document } from "../document/Document";
import { User } from "../user/User";

export type AccessControl = {
  createdAt: Date;
  document?: Document | null;
  id: string;
  permissionLevel?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
