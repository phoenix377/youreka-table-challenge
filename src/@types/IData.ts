export interface IData {
  totalSize: number;
  done: boolean;
  records: IRecord[];
}

export interface IRecord {
  attributes: IAttributes;
  Id: string;
  Name: string;
  AnnualRevenue: number | null;
  Website: string;
  AccountNumber: string | null;
  Rating: "Cold" | "Warm" | "Hot" | null;
  UpsellOpportunity__c: "Yes" | "No" | "Maybe" | null;
  Contacts: IContact;
}

interface IContact {
  totalSize: number;
  done: boolean;
  records: IContactRecord[];
}

export interface IContactRecord {
  attributes: IAttributes;
  Id: string;
  Name: string;
  Title: string | null;
  Phone: string | null;
  Department: string | null;
  Email: string | null;
}

interface IAttributes {
  type: "Contact" | "Account";
  url: string;
}
