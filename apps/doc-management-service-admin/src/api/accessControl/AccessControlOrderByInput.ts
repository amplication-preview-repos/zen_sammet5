import { SortOrder } from "../../util/SortOrder";

export type AccessControlOrderByInput = {
  createdAt?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  permissionLevel?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
