import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-content-posts',
  templateUrl: './content-posts.component.html',
  styleUrls: ['./content-posts.component.scss']
})
export class ContentPostsComponent implements OnInit {

  id:string="";
  email: string;
  nombre:string;
  selectedRow : string;
  seleccionado:any=null;

  constructor(private _service:ApiService,private router: Router) {       
  }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.nombre=this.email.split("@")[0];
  }

  enviarIdHeader(idSeleccionado: string) {
    this.selectedRow = idSeleccionado;  
    this.id=idSeleccionado;
    this.seleccionado=idSeleccionado;
  }


}

