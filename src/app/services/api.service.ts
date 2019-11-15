import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import { Post } from '../models/post.model';
import { Comentario } from '../models/comentario.model';
import { Observable } from 'rxjs';

const URL = 'https://jsonplaceholder.typicode.com/';
const CACHE_SIZE = 1;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  posts: any;
  comentarios: any;
  private comentarios$: Observable<Array<Comentario>>;

  constructor(private http: HttpClient) {

  this.http.get(URL + 'posts').subscribe(
      (response) => {
        this.posts = response;
       }
  );

  }

  getPosts(){
    console.log(this.posts);
    return this.posts;
  }

  borrarPost(id:any){
    this.http.delete(URL + 'posts/'+id) 
    .subscribe(response => { 
        for( var i = 0; i < this.posts.length; i++){ 
          if ( this.posts[i].id === id) {
        this.posts.splice(i, 1); 
            }
        }
    }); 
    alert("El post con "+id+" ha sido eliminado");
  }

  añadirPost(){

    let post: Post = {
      userId: 24,
      title: 'Post nuevo',
      body: 'Este es un nuevo post añadido'
    }
    
    this.http.post<Post>(URL+ 'posts/',post).pipe(
      map( post => {
        console.log(post);
        this.posts.push(post);        
      })
    ).subscribe();
    alert("Anadido nuevo post correctamente"); 
  }


    getComentariosAll (): Observable<Comentario[]> {
      return this.http.get<Comentario[]>(URL + 'comments').pipe(
        map(response => response)
      );
    }

  getComentariosById(id:string){
    return this.http.get<Comentario[]>(URL + `comments?postId=${id}`).pipe(
      map(response => response)
    );
  }

    getComentarios() {
    if (!this.comentarios$) {
      this.comentarios$ = this.getComentariosAll().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.comentarios$;
  }

  getComentariosid(id:string){
   return this.comentarios$ = this.getComentariosById(id);
  }

}