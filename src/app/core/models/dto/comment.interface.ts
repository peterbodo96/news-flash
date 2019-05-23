import { UserResponse } from './response/user.interface';

export interface Comment {
  writer: UserResponse;
  date: Date;
  content: string;
}
