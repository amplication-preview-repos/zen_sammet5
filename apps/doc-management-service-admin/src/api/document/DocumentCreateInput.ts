import { AccessControlCreateNestedManyWithoutDocumentsInput } from "./AccessControlCreateNestedManyWithoutDocumentsInput";
import { BlockchainRecordCreateNestedManyWithoutDocumentsInput } from "./BlockchainRecordCreateNestedManyWithoutDocumentsInput";
import { UploadCreateNestedManyWithoutDocumentsInput } from "./UploadCreateNestedManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  accessControls?: AccessControlCreateNestedManyWithoutDocumentsInput;
  blockchainRecords?: BlockchainRecordCreateNestedManyWithoutDocumentsInput;
  content?: string | null;
  hash?: string | null;
  title?: string | null;
  uploads?: UploadCreateNestedManyWithoutDocumentsInput;
  user?: UserWhereUniqueInput | null;
};
