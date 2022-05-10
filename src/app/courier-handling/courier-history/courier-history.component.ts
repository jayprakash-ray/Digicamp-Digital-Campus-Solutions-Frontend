import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OTP } from 'src/app/_interfaces/OTP';
import { Package } from 'src/app/_interfaces/Package';
import { AuthService } from 'src/app/_services/auth.service';
import { EmailAuthenticationService } from 'src/app/_services/email-authentication.service';
import { PackageHandlingService } from 'src/app/_services/package-handling.service';
import Swal from 'sweetalert2';
import { OtpDialogComponent } from '../couriers/otp-dialog/otp-dialog.component';
import { UpdateCourierComponent } from '../couriers/update-courier/update-courier.component';

@Component({
  selector: 'app-courier-history',
  templateUrl: './courier-history.component.html',
  styleUrls: ['./courier-history.component.scss']
})
export class CourierHistoryComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  dataSource: MatTableDataSource<Package> = new MatTableDataSource();
  sortedPackage: Package[];
  courier: any;
  id: any;
  showProgressSpinner: boolean = false;
  role: any;
  columns: string[] = ['packageNumber', 'OrderId', 'ownerName', 'Courier', 'arrivalDate', 'arrivalTime'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pkgService: PackageHandlingService,
    public dialog: MatDialog,
    public emailAuthenticationService: EmailAuthenticationService,
    public authService: AuthService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.pkgService.getPackages().subscribe(items => {
      this.courier = items;
      var pickedCourier = [];
      for (var item of this.courier) {
        if (item.isPicked == 1) {
          pickedCourier.push(item);
        }
      }
      this.courier = pickedCourier;
      // console.log("items: ", this.courier);
      this.dataSource = new MatTableDataSource(this.courier)
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
          return compare(a.mobileNo, b.mobileNo, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource.sort = this.sort;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}