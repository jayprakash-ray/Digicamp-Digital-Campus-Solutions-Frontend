import { Component , ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Package} from "../../_interfaces/Package";
import { PackageHandlingService } from '../../_services/package-handling.service';


@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.scss']
})
export class CouriersComponent {

  dataSource: MatTableDataSource<Package>= new MatTableDataSource();
  courier : any;
  columns: string[] =['packageNumber','OrderId','ownerName','Courier','arrivalDate','arrivalTime','pickedOn','pickingTime','pickedBy','recieverImage']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pkgService : PackageHandlingService) { 
    this.pkgService.getPackages().subscribe(items => {
      this.courier = items;
      console.log("items: ", this.courier);
      this.dataSource=new MatTableDataSource(this.courier)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   
  }
  formatDate(date: Date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  getTimeFromDate (date :Date)
  {
    var d = new Date(date),
      hr = '' + (d.getHours()),
      min = '' + d.getMinutes(),
      sec = d.getSeconds();
    return [hr, min, sec].join(':');
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}