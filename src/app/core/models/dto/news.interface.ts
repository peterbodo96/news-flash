import { UserResponse } from './response/user.interface';
import { Comment } from './comment.interface';

export interface News {
  id: number;
  title: string;
  lead: string;
  text: string;
  imageUrl: string;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
  writer: UserResponse;
  comments: Comment[];
}
