import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userId: string;
  name: string;
  rollNumber: any;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userId = this.authService.getId();
    this.name = this.authService.getName();
    this.rollNumber = this.authService.getRollNumber();
  }

}
