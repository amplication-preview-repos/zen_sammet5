import { AccessControlListRelationFilter } from "../accessControl/AccessControlListRelationFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  accessControls?: AccessControlListRelationFilter;
  documents?: DocumentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
