import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule } from '@angular/forms';

//servicios
import { HttpClientModule } from '@angular/common/http';

//modulos
import { MainModule } from "./modules/main/main.module";

//componentes
import { LoginComponent } from './modules/login/login/login.component';
import { ContentPostsComponent } from './modules/posts/content-posts/content-posts.component';
import { FooterPostsComponent } from './modules/posts//footer-posts/footer-posts.component';
import { HeaderPostsComponent } from './modules/posts//header-posts/header-posts.component';
import { ContentComentariosComponent } from './modules/comentarios/content-comentarios/content-comentarios.component';
import { HeaderComentariosComponent } from './modules/comentarios/header-comentarios/header-comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentPostsComponent,
    FooterPostsComponent,
    HeaderPostsComponent,
    HeaderComentariosComponent,
    ContentComentariosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MainModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
