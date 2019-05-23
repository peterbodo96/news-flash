import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpEndpoints } from '../enums/http-endpoints.enum';
import { Observable } from 'rxjs/index';
import { NewsFeed } from '../models/dto/response/news-feed.interface';
import { News } from '../models/dto/news.interface';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class NewsService {

  constructor(private httpService: HttpService) {
  }

  getNewsFeed(): Observable<NewsFeed[]> {
    return this.httpService.get(HttpEndpoints.newsFeed);
  }

  getNews(id: number): Observable<News> {
    return this.httpService.isMock()
      ? this.httpService.get(HttpEndpoints.news).pipe(
        map(news => {
          return news.filter(newsData => newsData.id === id);
        }),
      )
      : this.httpService.get(HttpEndpoints.news, new HttpParams().set('id', id.toString()));
  }
}
