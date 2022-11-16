export type Hotel = {
  id: string;
  hotelName: string;
  hotelAddress: string;
  hotelPhone: string;
  hotelImage: string;
  hotelFrontDeskPhone: string;
  hotelFrontDeskEmail: string;
  hotelDescription: string;
  hotelPositives: string;
  hotelCodes: HotelCodes;
  preferredSuppler: string;
  supplierCommissionList: string;
};

export type HotelCodes = {
  hbsi: string;
  bedsonline: string;
  vax: string;
};
