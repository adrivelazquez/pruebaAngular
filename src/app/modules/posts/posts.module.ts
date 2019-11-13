import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPostsComponent } from './header-posts/header-posts.component';
import { ContentPostsComponent } from './content-posts/content-posts.component';
import { FooterPostsComponent } from './footer-posts/footer-posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderPostsComponent, ContentPostsComponent, FooterPostsComponent]
})
export class PostsModule { }
