import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-comentarios',
  templateUrl: './header-comentarios.component.html',
  styleUrls: ['./header-comentarios.component.scss']
})
export class HeaderComentariosComponent implements OnInit {

  @Input() total;
  @Input() idPost;
  @Input() nombre;

  constructor() {
   }

  ngOnInit() {

  }

}
