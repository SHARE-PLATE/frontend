export type ShareRecommendationType = {
  id: number;
  thumbnailUrl: string;
  title: string;
  location: string;
  price: number;
  currentRecruitment: number;
  finalRecruitment: number;
  createdDateTime: string;
  closedDateTime: string;
};

export type ShareListType = {
  id: number;
  thumbnailUrl: string;
  title: string;
  location: string;
  price: number;
  originalPrice: number;
  currentRecruitment: number;
  finalRecruitment: number;
  recruitmentLimit: boolean;
  createdDateTime: string;
  closedDateTime: string;
  writerId: string;
  latitude: number;
  longitude: number;
};

export type ShareDetailType = {
  id: number;
  imageUrls: string[];
  writer: string;
  writerThumbnailImageUrl: string;
  writerId: string;
  title: string;
  location: string;
  locationGuide: string;
  latitude: number;
  longitude: number;
  description: string;
  price: number;
  originalPrice: number;
  currentRecruitment: number;
  finalRecruitment: number;
  recruitmentMemberThumbnailImageUrls: string[];
  createdDateTime: string;
  closedDateTime: string;
  wish: boolean;
  entry: boolean;
  wishCount: number;
  locationNegotiation: boolean;
  priceNegotiation: boolean;
  hashtags: string[];
  isWriter: boolean;
};

export type ShareWriterType = {
  writer: string;
  thumbnailUrl: string;
  shareCount: number;
  shares: ShareRecommendationType[];
};
