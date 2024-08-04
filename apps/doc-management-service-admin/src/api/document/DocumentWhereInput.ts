import { AccessControlListRelationFilter } from "../accessControl/AccessControlListRelationFilter";
import { BlockchainRecordListRelationFilter } from "../blockchainRecord/BlockchainRecordListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UploadListRelationFilter } from "../upload/UploadListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  accessControls?: AccessControlListRelationFilter;
  blockchainRecords?: BlockchainRecordListRelationFilter;
  content?: StringNullableFilter;
  hash?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  uploads?: UploadListRelationFilter;
  user?: UserWhereUniqueInput;
};
