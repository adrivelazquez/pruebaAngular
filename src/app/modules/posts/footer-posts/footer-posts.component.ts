import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.scss']
})
export class FooterPostsComponent implements OnInit {
  @Input() idSeleccionado:any;
  
  constructor(private _service:ApiService) {
    
   }

  ngOnInit() {
  }


  borrarPost(){
    console.log(this.idSeleccionado);
    this._service.borrarPost(this.idSeleccionado);
  }

  nuevoPost(){
    this._service.añadirPost();
  }



}
