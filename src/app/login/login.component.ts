import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() redirectToSigninPage = new EventEmitter<string>();
  constructor(private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }
  
  redirectToSignin(){
    this.redirectToSigninPage.emit(); 
  }
 
  msg: string = '';



  ngOnInit(): void {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    if (this.authService.isLoggedIn()) {
      const role: string = this.authService.getRole();
      if (role === "student") this.router.navigate(['/student']);
      else if (role === "admin") this.router.navigate(['/admin']);
      console.log("role:", role);
    }
  }

  login(loginForm: NgForm) {
    this.loginService.login(loginForm.value).subscribe({
      next: (response: any) => {
        const role = response.user.role.roleName;
        if (role === 'student') {
          if (response.user.status === 0) {
            this.loginService.tempToken = response.jwtToken;
            this.router.navigate([`/update-password/${response.user.userId}`]);
          }
          else {
            this.authService.setId(response.user.userId);
            this.authService.setRole(role);
            this.authService.setToken(response.jwtToken);
            this.router.navigate(['/student']);
          }
        } else if (role === 'admin') {
          this.authService.setId(response.user.userId);
          this.authService.setRole(role);
          this.authService.setToken(response.jwtToken);
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.log(error);
        this._snackBar.open("Invalid credentials!", "", {duration: 3000});
      }
    });
  }
}
