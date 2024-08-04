import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type UploadCreateInput = {
  document?: DocumentWhereUniqueInput | null;
  fileName?: string | null;
  filePath?: string | null;
  fileSize?: number | null;
  fileType?: string | null;
};
