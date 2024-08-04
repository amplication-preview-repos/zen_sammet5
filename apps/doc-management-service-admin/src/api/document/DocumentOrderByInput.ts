import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
