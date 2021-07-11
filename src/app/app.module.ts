import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

import { NgParticlesModule } from 'ng-particles';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { PartnersComponent } from './partners/partners.component';
import { TeamComponent } from './team/team.component';
import { SpringprogramComponent } from './springprogram/springprogram.component';
import { BlogComponent } from './blog/blog.component';
import { PodcastComponent } from './podcast/podcast.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminBlogNewComponent } from './admin/admin-blog-new/admin-blog-new.component';
import { AdminPodcastComponent } from './admin/admin-podcast/admin-podcast.component';
import { AdminPodcastNewComponent } from './admin/admin-podcast-new/admin-podcast-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    PartnersComponent,
    TeamComponent,
    SpringprogramComponent,
    BlogComponent,
    PodcastComponent,
    AdminComponent,
    LoginComponent,
    AdminBlogComponent,
    AdminBlogNewComponent,
    AdminPodcastComponent,
    AdminPodcastNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    NgParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
