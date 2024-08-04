import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlockchainRecordWhereInput = {
  blockchainHash?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
