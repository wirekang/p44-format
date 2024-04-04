export type Language = "en" | "ko";

export type I18nText = Record<Language, string | null>;

export type TagTarget = "article" | "paragraph";

export type Priority = number | null;

export type TagId = string;

export type Tag = {
  id: TagId;
  label: I18nText;
  description: I18nText | null;
  priority: Priority;
};

export type TagGroupId = string;

export type TagGroup = {
  id: TagGroupId;
  label: I18nText;
  description: I18nText;
  target: TagTarget[];
  priority: Priority;
  tags: TagId[];
};

export type Tags = [TagGroupId, TagId[]][];

export type ParagraphId = string;

export type Paragraph = {
  id: ParagraphId;
  tags: Tags;
  text: I18nText;
};

export type Article = {
  tags: Tags;
  title: I18nText;
  paragraphs: ParagraphId[];
  priority: Priority;
  draft: boolean;
};

export type FlatTags = [TagGroup, Tag[]][];

export type FlatParagraph = Omit<Paragraph, "tags"> & {
  tags: FlatTags;
};

export type FlatArticle = Omit<Article, "tags" | "paragraphs"> & {
  tags: FlatTags;
  paragraphs: FlatParagraph[];
};
