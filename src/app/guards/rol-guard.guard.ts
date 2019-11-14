import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolGuardGuard implements CanActivate {
  
  constructor(private router: Router) {}

 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (!(localStorage.getItem("logged") == 'true' && localStorage.getItem("ROL")=='admin')) {
        console.log("No es admin");
        this.router.navigate(['/login']);
        return false;
      }else{
        return true;
      }

  }
}
