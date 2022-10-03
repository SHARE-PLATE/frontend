export interface keywordExampleType {
  location: string;
  keyword: string[];
}

export interface keywordsType {
  id: number;
  contents: string;
}

interface basicKeywordType {
  location: string;
  latitude: string;
  longitude: string;
}
export interface keywordDataType extends basicKeywordType {
  keywords: keywordsType[];
}

export interface newKeywordType extends basicKeywordType {
  contents: string;
}
