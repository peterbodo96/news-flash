import { Component, OnInit } from '@angular/core';
import { News } from '../../core/models/dto/news.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { Category } from '../../core/models/dto/response/category.interface';

@Component({
  selector: 'app-index-news',
  templateUrl: './index-news.component.html',
  styleUrls: ['./index-news.component.css']
})
export class IndexNewsComponent implements OnInit {
  categories: Category[] = [];

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.db.list('/categories').valueChanges().subscribe(categories => {
      categories.forEach((category: Category, index) => {
        const categoryData: Category = { name: category.name, news: [] };
        this.categories.push(categoryData);
        category.news.forEach(news => {
          this.db.object('/news/' + news).valueChanges().subscribe((newsResponse: News) => {
            this.categories[index].news.push(newsResponse);
          });
        });
      });
    });
  }
}
