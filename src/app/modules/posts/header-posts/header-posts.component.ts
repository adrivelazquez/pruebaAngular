import { Component,OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-header-posts',
  templateUrl: './header-posts.component.html',
  styleUrls: ['./header-posts.component.scss']
})
export class HeaderPostsComponent implements OnInit {

  @Input() idPost: string;
  @Input() email: string;
  @Input() nombre: string;

  constructor() { }

  ngOnInit() {
  }

}