import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type UploadUpdateInput = {
  document?: DocumentWhereUniqueInput | null;
  fileName?: string | null;
  filePath?: string | null;
  fileSize?: number | null;
  fileType?: string | null;
};
