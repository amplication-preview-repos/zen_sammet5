import { FolderWhereUniqueInput } from "./FolderWhereUniqueInput";
import { FolderCreateNestedManyWithoutFoldersInput } from "./FolderCreateNestedManyWithoutFoldersInput";

export type FolderCreateInput = {
  description?: string | null;
  folder?: FolderWhereUniqueInput | null;
  folders?: FolderCreateNestedManyWithoutFoldersInput;
  name?: string | null;
};
