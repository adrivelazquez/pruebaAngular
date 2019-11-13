import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { RolGuardGuard } from './guards/rol-guard.guard';
import { LoginComponent } from './modules/login/login/login.component';
import { ContentPostsComponent } from './modules/posts/content-posts/content-posts.component';
import { ContentComentariosComponent } from './modules/comentarios/content-comentarios/content-comentarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'posts', component: ContentPostsComponent, canActivate: [AuthGuardGuard] },
  { path: 'comentarios', component: ContentComentariosComponent, canActivate: [RolGuardGuard] },
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
