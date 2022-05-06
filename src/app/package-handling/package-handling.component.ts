import { Component , ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Package} from "../_interfaces/Package";
import { PackageHandlingService } from '../_services/package-handling.service';


@Component({
  selector: 'app-package-handling',
  templateUrl: './package-handling.component.html',
  styleUrls: ['./package-handling.component.css']
})
export class PackageHandlingComponent {

  dataSource: MatTableDataSource<Package>= new MatTableDataSource();
  courier : any;
  columns: string[] =['packageNumber','OrderId','ownerName','Courier','arrivalDate','pickedOn','pickedBy','recieverImage']
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}