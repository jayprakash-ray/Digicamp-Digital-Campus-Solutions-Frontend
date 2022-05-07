import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userId: string;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userId = this.authService.getId();
  }

}
