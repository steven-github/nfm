export interface Hero {
  id: number;
  name: string;
}

export interface Customer {
  nfmAccountId: string;
  accountId: number;
  partyId: number;
  partyTypeId: number;
  partyTypeName: string | null;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  occupationName: string | null;
  address_id: number | null;
  employerName: string | null;
  addressLineOneText: string | null | null;
  addressLineTwoText: string | null;
  addressCityName: string | null;
  addressStateProvinceCode: string | null;
  addressPostalPlusFourCode: string | null;
  addressCountryCode: string | null;
  phoneWork: string | null;
  phoneHome: string | null;
  partyEmail: string | null;
  errorMsg: string | null;
}

export interface CustomerByEmail {
  nfmAccountId: string;
  partyEmail: string | null;
  customers: Customer[];
}
