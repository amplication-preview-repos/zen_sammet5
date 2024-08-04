import { AccessControlUpdateManyWithoutDocumentsInput } from "./AccessControlUpdateManyWithoutDocumentsInput";
import { BlockchainRecordUpdateManyWithoutDocumentsInput } from "./BlockchainRecordUpdateManyWithoutDocumentsInput";
import { UploadUpdateManyWithoutDocumentsInput } from "./UploadUpdateManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  accessControls?: AccessControlUpdateManyWithoutDocumentsInput;
  blockchainRecords?: BlockchainRecordUpdateManyWithoutDocumentsInput;
  content?: string | null;
  hash?: string | null;
  title?: string | null;
  uploads?: UploadUpdateManyWithoutDocumentsInput;
  user?: UserWhereUniqueInput | null;
};
