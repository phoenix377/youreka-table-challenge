import { IRecord } from "@types";

export const getContactRecords = (records: IRecord[], id: string) =>
  records.find((record) => record.Id === id)?.Contacts.records || [];
