import { SortOrder } from "../../util/SortOrder";

export type FolderOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  folderId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
