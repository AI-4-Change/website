import { NgModule } from '@angular/core';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogNewComponent } from './admin/admin-blog-new/admin-blog-new.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminPodcastNewComponent } from './admin/admin-podcast-new/admin-podcast-new.component';
import { AdminPodcastComponent } from './admin/admin-podcast/admin-podcast.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { BlogComponent } from './blog/blog.component';
import { IndexComponent } from './index/index.component';
import { PartnersComponent } from './partners/partners.component';
import { PodcastComponent } from './podcast/podcast.component';
import { SpringprogramComponent } from './springprogram/springprogram.component';
import { TeamComponent } from './team/team.component';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['admin/login']);

const redirectAdminToAdmin = () => redirectLoggedInTo(['admin']);

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'admin/blog',
    component: AdminBlogComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'admin/blog/new',
    component: AdminBlogNewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'admin/login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectAdminToAdmin },
  },
  {
    path: 'admin/podcast',
    component: AdminPodcastComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'admin/podcast/new',
    component: AdminPodcastNewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: 'blog', component: BlogComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'SP', component: SpringprogramComponent },
  { path: 'team', component: TeamComponent },
  { path: '', component: IndexComponent },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
