import { IRecord, TSalesTableHeader } from "@types";

export const salesTableHeader: {
  label: TSalesTableHeader;
  value: keyof IRecord;
}[] = [
  { label: "Id", value: "Id" },
  { label: "Name", value: "Name" },
  { label: "Annual Revenue", value: "AnnualRevenue" },
  { label: "Website", value: "Website" },
  { label: "Account Number", value: "AccountNumber" },
  { label: "Rating", value: "Rating" },
  { label: "UpsellOpportunity__c", value: "UpsellOpportunity__c" },
  { label: "Contacts", value: "Contacts" },
];
