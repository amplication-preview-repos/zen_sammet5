import { FolderWhereUniqueInput } from "./FolderWhereUniqueInput";
import { FolderUpdateManyWithoutFoldersInput } from "./FolderUpdateManyWithoutFoldersInput";

export type FolderUpdateInput = {
  description?: string | null;
  folder?: FolderWhereUniqueInput | null;
  folders?: FolderUpdateManyWithoutFoldersInput;
  name?: string | null;
};
