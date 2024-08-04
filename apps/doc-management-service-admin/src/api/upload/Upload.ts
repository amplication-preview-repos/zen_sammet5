import { Document } from "../document/Document";

export type Upload = {
  createdAt: Date;
  document?: Document | null;
  fileName: string | null;
  filePath: string | null;
  fileSize: number | null;
  fileType: string | null;
  id: string;
  updatedAt: Date;
};
