import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { News } from '../../core/models/dto/news.interface';
import { AngularFireDatabase } from 'angularfire2/database';

const maxPopularNews = 4;
const orderByLikes = 'likes';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.css']
})
export class PopularNewsComponent implements OnInit {
  popularNews: Observable<News[]>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.popularNews = this.db.list<News>('/news', ref => ref.orderByChild(orderByLikes)
      .limitToLast(maxPopularNews)).valueChanges();
  }

}
