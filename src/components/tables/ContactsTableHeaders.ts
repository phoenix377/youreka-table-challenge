import { IContactRecord } from "../../@types";
import { TContactsTableHeader } from "../../@types/TContactsTableHeader";

export const contactsTableHeaders: {
  label: TContactsTableHeader;
  value: keyof IContactRecord;
}[] = [
  { label: "Id", value: "Id" },
  { label: "Name", value: "Name" },
  { label: "Title", value: "Title" },
  { label: "Phone", value: "Phone" },
  { label: "Department", value: "Department" },
  { label: "Email", value: "Email" },
];
