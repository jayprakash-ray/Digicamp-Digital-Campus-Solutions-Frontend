import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Package } from "../../_interfaces/Package";
import { PackageHandlingService } from '../../_services/package-handling.service';
import {MatMenuTrigger} from '@angular/material/menu';
import { AddCourierComponent } from '../add-courier/add-courier.component';


@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.scss']
})
export class CouriersComponent implements OnInit{
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  dataSource: MatTableDataSource<Package> = new MatTableDataSource();
  sortedPackage: Package[];
  courier: any;
  columns: string[] = ['packageNumber', 'OrderId', 'ownerName', 'Courier', 'arrivalDate', 'arrivalTime','submit','Actions']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pkgService: PackageHandlingService,public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.pkgService.getPackages().subscribe(items => {
      this.courier = items;
      console.log("items: ", this.courier);
      this.dataSource = new MatTableDataSource(this.courier)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CouriersComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
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

  getTimeFromDate(date: Date) {
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

  sortData(sort: Sort) {
    console.log(sort, "Sort Called");
    const packageData: Package[] = this.dataSource.filteredData;;
    if (!sort.active || sort.direction === '') {
      this.sortedPackage = packageData;
      return;
    }
    this.sortedPackage = packageData.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'packageNumber':
          return compare(a.packageNumber, b.packageNumber, isAsc);
        case 'ownerName':
          return compare(a.ownerName, b.ownerName, isAsc);
        case 'courier':
          return compare(a.courier, b.courier, isAsc);
        case 'arrivalDate':
          return compare(a.arrivalDate, b.arrivalDate, isAsc);
        case 'arrivalDate':
          return compare(a.arrivalDate, b.arrivalDate, isAsc);
        case 'orderId':
          return compare(a.orderId, b.orderId, isAsc);
        case 'isPicked':
          return compare(a.isPicked, b.isPicked, isAsc);
        case 'mobileNo':
          return compare(a.isPicked, b.isPicked, isAsc);
        default:
          return 0;
      }
    });
    console.log("Original: ", this.dataSource.data);
    this.dataSource.sort = this.sort;
    console.log("Sorted: ", this.dataSource.data);
  }



}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}