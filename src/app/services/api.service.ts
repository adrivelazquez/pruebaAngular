import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Post } from '../models/post.model';
import { Comentario } from '../models/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'https://jsonplaceholder.typicode.com/';

  posts: any;

  constructor(private http: HttpClient) { 
    this.http.get(this.URL + 'posts').subscribe(
      (response) => {
        this.posts = response;
       }
    );
  }

  getPosts(){
    return this.posts;
  }

  borrarPost(id:String){
    this.http.delete(this.URL + 'posts/'+id) 
    .subscribe(response => {  
      let index = this.posts.indexOf(id);  
      this.posts.splice(index, 1);
      alert("El post con "+id+" ha sido eliminado");  
    }); 
  }

  añadirPost(){

    let post: Post = {
      userId: 24,
      title: 'Post nuevo',
      body: 'Este es un nuevo post añadido'
    }
    
    this.http.post<Post>(this.URL+ 'posts/',post).pipe(
      map( post => {
        console.log(post);
        this.posts.push(post);
        alert("Anadido nuevo post correctamente");  
      })
    ).subscribe();
  }

}