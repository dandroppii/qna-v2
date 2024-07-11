export interface BaseResponse<T> {
  data: T;
}

export type IGetMenuResponse = MenuItem[];

export interface MenuItem {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  qna_categories: QnaCategories;
  icon: Icon;
}

export interface QnaCategories {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: Icon;
}

export interface Icon {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface IQuestionResponse {
  id: number;
  attributes: QuestionAttributes;
}

export interface IGetQuestionResponse {
  data: IQuestionResponse[];
}

export interface IGetCategoryResponse {
  id: number;
  attributes: {
    qna_questions: {
      data: IQuestionResponse[];
    };
  };
}

export interface QuestionAttributes {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: any;
  steps: {
    id: string;
    name: string;
    description: string;
    image: {
      data: {
        attributes: Attributes3;
      };
    };
  }[];
  category: QuestionCategory;
  icon: Icon;
  related_questions: QuestionRelatedQuestions;
  qna_question: QuestionQnaQuestion;
}

export interface QuestionCategory {
  data: Data;
}

export interface QuestionData {
  id: number;
  attributes: Attributes2;
}

export interface QuestionAttributes2 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface QuestionIcon {
  data: QuestionData2;
}

export interface QuestionData2 {
  id: number;
  attributes: Attributes3;
}

export interface QuestionAttributes3 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionRelatedQuestions {
  data: IQuestionResponse[];
}

export interface QuestionQnaQuestion {
  data: QuestionData3;
}

export interface QuestionData3 {
  id: number;
  attributes: QuestionAttributes4;
}

export interface QuestionAttributes4 {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
