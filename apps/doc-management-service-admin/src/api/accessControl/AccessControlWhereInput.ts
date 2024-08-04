import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessControlWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  permissionLevel?: "Option1";
  user?: UserWhereUniqueInput;
};
