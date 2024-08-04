import { AccessControlCreateNestedManyWithoutUsersInput } from "./AccessControlCreateNestedManyWithoutUsersInput";
import { DocumentCreateNestedManyWithoutUsersInput } from "./DocumentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  accessControls?: AccessControlCreateNestedManyWithoutUsersInput;
  documents?: DocumentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
