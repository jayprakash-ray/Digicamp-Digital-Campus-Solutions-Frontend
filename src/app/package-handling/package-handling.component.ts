import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Package} from "../_interfaces/Package";


@Component({
  selector: 'app-package-handling',
  templateUrl: './package-handling.component.html',
  styleUrls: ['./package-handling.component.css']
})
export class PackageHandlingComponent implements AfterViewInit {

  dataSource: MatTableDataSource<Package>;
  courier : Package[];
  columns: string[] =['packageNumber','OrderId','name','Courier','Receiving Date','pickedOn','pickedBy','recieverImage']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    this.courier=[
      {
      packageNumber : 1,
      orderId: '00001',
      name :'Amit Dev Chauhan',
      courier:'FedEX',
      receivingDate:'11/02/2022',
      pickedBy :'Amit Kumar',
      recieverImage:'Image',
      pickedOn:'14/02/2022',
      isPicked:'Yes'
    },
    {
      packageNumber : 1,
      orderId: '00001',
      name :'Amit Dev Chauhan',
      courier:'FedEX',
      receivingDate:'11/02/2022',
      pickedBy :'Amit Kumar',
      recieverImage:'Image',
      pickedOn:'14/02/2022',
      isPicked:'Yes'
    },
    {
      packageNumber : 1,
      orderId: '00001',
      name :'Amit Dev Chauhan',
      courier:'FedEX',
      receivingDate:'11/02/2022',
      pickedBy :'Amit Kumar',
      recieverImage:'Image',
      pickedOn:'14/02/2022',
      isPicked:'Yes'
    },
    {
      packageNumber : 1,
      orderId: '00001',
      name :'Amit Dev Chauhan',
      courier:'FedEX',
      receivingDate:'11/02/2022',
      pickedBy :'Amit Kumar',
      recieverImage:'Image',
      pickedOn:'14/02/2022',
      isPicked:'Yes'
    },
  ]
  this.dataSource=new MatTableDataSource(this.courier)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}