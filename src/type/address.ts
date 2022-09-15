export interface AddressInfoType {
  id?: string;
  x?: string;
  y?: string;
  place_name?: string;
  road_address_name?: string;
  address_name?: string;
}

export interface AddressDetailType {
  id?: string;
  lat?: string | number;
  lng?: string | number;
  place_name?: string;
  road_address_name?: string;
}
