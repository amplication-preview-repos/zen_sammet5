import { SortOrder } from "../../util/SortOrder";

export type UploadOrderByInput = {
  createdAt?: SortOrder;
  documentId?: SortOrder;
  fileName?: SortOrder;
  filePath?: SortOrder;
  fileSize?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
