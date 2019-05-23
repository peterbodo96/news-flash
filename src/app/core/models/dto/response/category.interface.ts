import { News } from '../news.interface';

export interface Category {
  name: string;
  news: News[];
}
