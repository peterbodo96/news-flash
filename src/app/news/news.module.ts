import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexNewsComponent } from './index-news/index-news.component';
import { CoreModule } from '../core/core.module';
import { DetailsNewsComponent } from './details-news/details-news.component';
import { PopularNewsComponent } from './popular-news/popular-news.component';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [
    IndexNewsComponent,
    DetailsNewsComponent,
    PopularNewsComponent,
  ],
  imports: [
    CommonModule,
    CommentsModule,

    CoreModule
  ],
  exports: [
    IndexNewsComponent,
    DetailsNewsComponent,
    PopularNewsComponent,
  ]
})
export class NewsModule { }
