const DEV_TO_API = "https://dev.to/api";

export interface DevToUser {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string | null;
  user_id: number;
  website_url: string | null;
  profile_image: string;
  profile_image_90: string;
}

export interface DevToArticleSummary {
  type_of: "article";

  id: number;

  title: string;

  description: string;

  readable_publish_date: string;

  slug: string;

  path: string;

  url: string;

  comments_count: number;

  public_reactions_count: number;

  collection_id: number | null;

  published_timestamp: string;

  language: string;

  subforem_id: number | null;

  positive_reactions_count: number;

  cover_image: string | null;

  social_image: string | null;

  canonical_url: string;

  created_at: string;

  edited_at: string | null;

  crossposted_at: string | null;

  published_at: string;

  last_comment_at: string;

  reading_time_minutes: number;

  tag_list: string[];

  tags: string;

  user: DevToUser;
}

export interface DevToArticle
  extends DevToArticleSummary {
  body_html: string;
}


export async function fetchArticles(): Promise<
  DevToArticleSummary[]
> {
  const response = await fetch(
    `${DEV_TO_API}/articles?username=vedansh0412`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Dev.to articles: ${response.status}`
    );
  }

  return response.json();
}


export async function fetchArticleById(
  id: number
): Promise<DevToArticle> {
  const response = await fetch(
    `${DEV_TO_API}/articles/${id}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Dev.to article: ${response.status}`
    );
  }

  const article = await response.json();

  return {
    ...article,

    tag_list: Array.isArray(article.tag_list)
      ? article.tag_list
      : typeof article.tag_list === "string"
        ? article.tag_list
            .split(",")
            .map((tag: string) => tag.trim())
            .filter(Boolean)
        : [],
  };
}