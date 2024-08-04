import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessControlCreateInput = {
  document?: DocumentWhereUniqueInput | null;
  permissionLevel?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
