import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Post } from '../../../models/post.model';
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

  posts: Post[]; 

  constructor(private _service:ApiService) {       
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

