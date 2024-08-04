import { AccessControl as TAccessControl } from "../api/accessControl/AccessControl";

export const ACCESSCONTROL_TITLE_FIELD = "id";

export const AccessControlTitle = (record: TAccessControl): string => {
  return record.id?.toString() || String(record.id);
};
