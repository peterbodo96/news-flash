import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestCommentsComponent } from './latest-comments/latest-comments.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LatestCommentsComponent],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [LatestCommentsComponent]
})
export class CommentsModule { }
