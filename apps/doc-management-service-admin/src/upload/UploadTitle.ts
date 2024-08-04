import { Upload as TUpload } from "../api/upload/Upload";

export const UPLOAD_TITLE_FIELD = "fileName";

export const UploadTitle = (record: TUpload): string => {
  return record.fileName?.toString() || String(record.id);
};
