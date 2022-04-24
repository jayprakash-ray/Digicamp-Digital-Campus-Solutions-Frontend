import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoFormComponent } from '../info-form/info-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getInfo() {
    const dialogRef = this.dialog.open(InfoFormComponent, {
      data: this.item,
      // height: '400px',
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'collected') {
        //warn
        //remove item;
      }
    })

  }

}
