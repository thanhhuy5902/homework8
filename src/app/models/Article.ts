import { User } from './User';
export interface Article {
  id: number;
  title: string;
  description: string;
  created_at: string;
  published_at: string;
  comments_count: number;
  readable_publish_date: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  reading_time_minutes: number;
  tag_list: string[];

  cover_image: string;
  tags: string;
  user: User;
}
