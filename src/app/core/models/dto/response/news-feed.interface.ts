import { News } from '../news.interface';

export interface NewsFeed {
  category: string;
  news: News[];
}
