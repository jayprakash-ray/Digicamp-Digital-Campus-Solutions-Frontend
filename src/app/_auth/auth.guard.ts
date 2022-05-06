import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { LoginService } from '../_services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.getToken()!==null && this.authService.getToken()){
        const role = route.data["role"];

        if(role!==null && role.length>0){
          let match = false;
          for(let i=0; i<role.length; i++){
            if(this.authService.getRole()===role[i]){
              match=true;
              break;
            }
          }
          // const match = this.doctorService.roleMatch(role);

          if(match) return true;
          else {
            this.router.navigate(['forbidden']);
            return false;
          }
        }
      }

      this.router.navigate(['/login']);
      return false;
  }
  
}
