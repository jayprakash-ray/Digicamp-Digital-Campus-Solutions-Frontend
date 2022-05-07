import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { LoginService } from '../_services/login.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }
  

  msg: string = '';

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    console.log("Called:" , this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      const role: string = this.authService.getRole();
      if (role === "student") this.router.navigate(['/package']);
      else if (role === "admin") this.router.navigate(['/package']);
      console.log("role:", role);
    }
  }

  login(loginForm: NgForm) {
    this.loginService.login(loginForm.value).subscribe({
      next: (response: any) => {
        const role = response.user.role.roleName;
        if (role === 'student' || role === 'admin') {
            this.loginService.tempToken = response.jwtToken;
            this.authService.setId(response.user.userId);
            this.authService.setRole(role);
            this.authService.setName(response.user.name);
            this.authService.setRollNumber(response.user.rollNumber);
            this.authService.setToken(response.jwtToken);
            this.router.navigate([`/package`]);
            console.log("response: ", response);
        }else {
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
