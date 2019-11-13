import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComentariosComponent } from './header-comentarios/header-comentarios.component';
import { ContentComentariosComponent } from './content-comentarios/content-comentarios.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComentariosComponent, ContentComentariosComponent]
})
export class ComentariosModule { }
