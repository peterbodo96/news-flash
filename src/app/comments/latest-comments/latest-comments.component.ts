import { Component, OnInit } from '@angular/core';
import { Comment } from '../../core/models/dto/comment.interface';
import { UserResponse } from '../../core/models/dto/response/user.interface';
import { CommentResponse } from '../../core/models/dto/response/comment-response.interface';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-latest-comments',
  templateUrl: './latest-comments.component.html',
  styleUrls: ['./latest-comments.component.css']
})
export class LatestCommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.db.list('/comments').valueChanges().subscribe((comments: any[]) => {
      comments[0].forEach((comment: CommentResponse) => {
        this.db.object('/users/' + comment.writer).valueChanges().subscribe((user: UserResponse) => {
          const commentData: Comment = {
            writer: user,
            date: new Date(),
            content: comment.content
          };
          this.comments.push(commentData);
        });
      });
    });
  }

}
