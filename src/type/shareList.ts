interface listExampleType {
  id: number;
  title: string;
  location: string;
  price: number;
  originalPrice: number;
  currentRecruitment: number;
  finalRecruitment: number;
  createdDateTime: string;
  appointmentDateTime: string;
}

export interface thumbnailUrlListType extends listExampleType {
  thumbnailUrl: string;
}

export interface imageUrlsArrayListType extends listExampleType {
  imageUrls: string[];
  writer: string;
  locationNegotiation: boolean;
  priceNegotiation: boolean;
  writerThumbnailImageUrl: string;
  latitude: number;
  longitude: number;
  description: string;
  closedDateTime: string;
  recruitmentMemberThumbnailImageUrls: string[];
  wish: boolean;
  wishCount: number;
  entry: boolean;
  locationGuide: string;
  hashtags: string[];
}
