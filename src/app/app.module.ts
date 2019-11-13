import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule } from '@angular/forms';

//modulos
import { MainModule } from "./modules/main/main.module";

//componentes

import { LoginComponent } from './modules/login/login/login.component';
import { ContentPostsComponent } from './modules/posts/content-posts/content-posts.component';
import { ContentComentariosComponent } from './modules/comentarios/content-comentarios/content-comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentPostsComponent,
    ContentComentariosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
