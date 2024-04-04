export type Language = string;

export type I18nText = Record<Language, string | null>;

export type TagTarget = "article" | "paragraph";

export type Priority = number | null;

export type TagId = number;
export type TagCategoryId = number;

export type Tag = {
  id: TagId;
  categoryId: TagCategoryId;
  label: I18nText;
  description: I18nText | null;
  priority: Priority;
};

export type TagCategory = {
  id: TagCategoryId;
  label: I18nText;
  description: I18nText;
  target: TagTarget[];
  priority: Priority;
};

export type ParagraphId = number;
export type ArticleId = number;
export type ParagraphTagId = number;

export type ParagraphTag = {
  id: ParagraphTagId;
  paragraphId: ParagraphId;
  tagId: TagId;
};

export type UnixSeconds = number;

export type Paragraph = {
  id: ParagraphId;
  articleId: ArticleId;
  text: I18nText;
  draft: boolean;
  createdAt: UnixSeconds;
  updatedAt: UnixSeconds;
};

export type ArticleTagId = number;

export type ArticleTag = {
  id: ArticleTagId;
  articleId: ArticleId;
  tagId: TagId;
};

export type Article = {
  id: ArticleId;
  title: I18nText;
  priority: Priority;
  draft: boolean;
  createdAt: UnixSeconds;
  updatedAt: UnixSeconds;
};
