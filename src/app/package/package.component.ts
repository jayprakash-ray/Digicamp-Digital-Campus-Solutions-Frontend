import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Package } from '../_interfaces/Package';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {


  public packageTableColumns = ['sno', 'name',	'courier', 'date', 'orderID']
  public packageDataSource = new MatTableDataSource<Package>();

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: any){}

  sortData(event: any){}


}
