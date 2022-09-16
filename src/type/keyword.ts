export interface keywordExampleType {
  location: string;
  keyword: string[];
}

export interface keywordsType {
  id: number;
  contents: string;
}
export interface keywordDataType {
  location: string;
  keywords: keywordsType[];
}

export interface newKeywordType {
  location: string;
  latitude: string;
  longitude: string;
  keyword: string;
}
