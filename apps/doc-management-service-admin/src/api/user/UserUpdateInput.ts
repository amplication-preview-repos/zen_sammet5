import { AccessControlUpdateManyWithoutUsersInput } from "./AccessControlUpdateManyWithoutUsersInput";
import { DocumentUpdateManyWithoutUsersInput } from "./DocumentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accessControls?: AccessControlUpdateManyWithoutUsersInput;
  documents?: DocumentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
