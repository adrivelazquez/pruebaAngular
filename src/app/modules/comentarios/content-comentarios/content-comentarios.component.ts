import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Comentario } from '../../../models/comentario.model';
import { ApiService } from '../../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-comentarios',
  templateUrl: './content-comentarios.component.html',
  styleUrls: ['./content-comentarios.component.scss']
})
export class ContentComentariosComponent implements OnInit {
 
  comentarios:Comentario[];
  totalComentarios:number=0;
  idBuscar:string;
  comentarios$: Observable<Array<Comentario>>;
  email: string;
  nombre:string;

  constructor(private _service:ApiService,private router: Router) {
   
  }

  ngOnInit() {

    this.comentarios$ = this._service.getComentarios();
    this.comentarios$.subscribe(response => this.totalComentarios=response.length);

    this.email = localStorage.getItem('email');
    this.nombre=this.email.split("@")[0];

  }

  buscar(id:string){
    console.log("pulsado");
    if(id==""){
      alert("Introduce un ID para buscar");
    }else{
      this.comentarios$=this._service.getComentariosById(id);
      this.comentarios$.subscribe(response => this.totalComentarios=response.length);
      this.idBuscar=id;
    }
  }


}
