import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsResponse } from '../../core/models/dto/response/news-response.interface';
import { Comment } from '../../core/models/dto/comment.interface';
import { UserResponse } from '../../core/models/dto/response/user.interface';
import { CommentResponse } from '../../core/models/dto/response/comment-response.interface';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.css']
})
export class DetailsNewsComponent implements OnInit {
  news: NewsResponse;
  comments: Comment[] = [];
  writer: UserResponse;
  mockDate = new Date();

  constructor(private db: AngularFireDatabase,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.db.object(`/news/${params.id}`).valueChanges().subscribe((news: NewsResponse) => {
        this.db.list(`/comments/${news.comments}`).valueChanges().subscribe(comments => {
          comments.forEach((comment: CommentResponse) => {
            this.db.object(`/users/${comment.writer}`).valueChanges().subscribe((user: UserResponse) => {
              const newComment: Comment = {
                writer: user,
                date: this.mockDate,
                content: comment.content
              };
              this.comments.push(newComment);
            });
          });
        });
        this.db.object(`/users/${news.writer}`).valueChanges().subscribe((user: UserResponse) => {
          this.writer = user;
        });
        this.news = news;
      });
    });
  }
}
