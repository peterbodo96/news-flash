import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexNewsComponent } from './news/index-news/index-news.component';
import { DetailsNewsComponent } from './news/details-news/details-news.component';

const routes: Routes = [
  { path: 'news', component: IndexNewsComponent },
  { path: 'news/:id', component: DetailsNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
