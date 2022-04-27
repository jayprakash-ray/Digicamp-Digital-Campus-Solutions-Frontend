import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Package} from "../_interfaces/Package";


@Component({
  selector: 'app-package-handling',
  templateUrl: './package-handling.component.html',
  styleUrls: ['./package-handling.component.css']
})
export class PackageHandlingComponent implements OnInit {

  dataSource: MatTableDataSource<Package>;
  courier : Package[];
  columns: string[] =['packageNumber','Order Id','Owner Name','Courier','Delivery Date','Received By']
  

  constructor() { 
    this.courier=[
      {
      packageNumber : 1,
      orderId: '2435445',
      name :'Khushal Abrol',
      courier:'FedEX',
      receivingDate:'12-02-2022',
      pickedBy :'Amit Kumar'

    },
    {
      packageNumber : 2,
      orderId: '2435445',
      name :'Khushal Abrol',
      courier:'FedEX',
      receivingDate:'12-02-2022',
      pickedBy :'Amit Kumar'

    },
    {
      packageNumber : 3,
      orderId: '2435445',
      name :'Khushal Abrol',
      courier:'FedEX',
      receivingDate:'12-02-2022',
      pickedBy :'Amit Kumar'

    },
    {
      packageNumber : 4,
      orderId: '2435445',
      name :'Khushal Abrol',
      courier:'FedEX',
      receivingDate:'12-02-2022',
      pickedBy :'Amit Kumar'

    },
    {
      packageNumber : 5,
      orderId: '2435445',
      name :'Khushal Abrol',
      courier:'FedEX',
      receivingDate:'12-02-2022',
      pickedBy :'Amit Kumar'

    },
  ]
  this.dataSource=new MatTableDataSource(this.courier)
  }

  ngOnInit(): void {
  }

}
 