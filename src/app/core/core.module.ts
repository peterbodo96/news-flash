import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './services/news.service';
import { HttpService } from './services/http.service';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatRippleModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatRippleModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'news-flash'),
    AngularFireDatabaseModule,
    RouterModule,
  ],
  providers: [
    NewsService,
    HttpService,
  ],
  exports: [
    AdvertisementComponent,
    FlexLayoutModule,
    MatRippleModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AngularFireDatabaseModule,
    RouterModule,
  ]
})
export class CoreModule {
}
