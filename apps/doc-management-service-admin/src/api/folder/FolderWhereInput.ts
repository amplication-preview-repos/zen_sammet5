import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FolderWhereUniqueInput } from "./FolderWhereUniqueInput";
import { FolderListRelationFilter } from "./FolderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FolderWhereInput = {
  description?: StringNullableFilter;
  folder?: FolderWhereUniqueInput;
  folders?: FolderListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
