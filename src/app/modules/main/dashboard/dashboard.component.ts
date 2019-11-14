import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    logout: boolean=false;
    
  constructor(private breakpointObserver: BreakpointObserver) {

    if(localStorage.getItem("logged")=='true'){
      this.logout=true;
    }

  }

  exit(){
    localStorage.setItem('email', null);
    localStorage.setItem('password', null);
    localStorage.setItem('logged', 'false');
    localStorage.setItem('ROL', null);
  }

  
  }
