import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string = '';
  // hide = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.msg = '';
    this.checkLoggedIn();
  }

  checkLoggedIn(){
    // if(this.doctorAuthService.isLoggedIn()){
    //   const role: string = this.doctorAuthService.getRole();
    //   if(role==="secondary specialist" || role==="medical officer") this.router.navigate(['/doctor/search-patient']);
    // }
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    if(loginForm.value.userId=="1" && loginForm.value.userPassword==="khushal"){
      this.router.navigate(['/packages'])
    }
    // this.doctorService.login(loginForm.value).subscribe({
    //   next: (response: any) => {
    //     const role = response.user.role.roleName;
    //     if(role==='secondary specialist' || role==='medical officer'){
    //       if(response.user.status===0){
    //         this.doctorService.tempToken = response.jwtToken;
    //         this.router.navigate([`/update-password/${response.user.userId}`]);
    //       }
    //       else{
    //         this.doctorAuthService.setId(response.user.userId);
    //         this.doctorAuthService.setRole(role);
    //         this.doctorAuthService.setToken(response.jwtToken);
    //         this.router.navigate(['/doctor/search-patient']);
    //       }
    //     }else{
    //       this.router.navigate(['/login']);
    //     }
    //   },
    //   error: (error) => {
    //     console.log(error);
    //     this.msg = "Invalid credentials!";
    //   }
    // });
  }
}
