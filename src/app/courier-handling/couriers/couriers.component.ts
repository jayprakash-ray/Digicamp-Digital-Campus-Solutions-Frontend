import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Package } from "../../_interfaces/Package";
import { PackageHandlingService } from '../../_services/package-handling.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { AddCourierComponent } from '../add-courier/add-courier.component';
import { UpdateCourierComponent } from './update-courier/update-courier.component';
import { EmailAuthenticationService } from 'src/app/_services/email-authentication.service';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import Swal from 'sweetalert2';
import { OTP } from 'src/app/_interfaces/OTP';


@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.scss']
})
export class CouriersComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  dataSource: MatTableDataSource<Package> = new MatTableDataSource();
  sortedPackage: Package[];
  courier: any;
  id: any;
  showProgressSpinner:boolean = false;
  columns: string[] = ['packageNumber', 'OrderId', 'ownerName', 'Courier', 'arrivalDate', 'arrivalTime', 'submit', 'edit', 'delete']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pkgService: PackageHandlingService,
    public dialog: MatDialog,
    public emailAuthenticationService: EmailAuthenticationService) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.pkgService.getPackages().subscribe(items => {
      this.courier = items;
      var unpickedCourier = [];
      for(var item of this.courier){
        if(item.isPicked==0){
          unpickedCourier.push(item);
        }
      }
      this.courier = unpickedCourier;
      console.log("items: ", this.courier);
      this.dataSource = new MatTableDataSource(this.courier)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  fireSwal(){

    Swal.fire({
      title: 'Sending OTP...',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }


  collect(element: any) {
    console.log("element: ", element);
    var min = 1000000;
    var max = 9999999;
    this.fireSwal();
    this.id = Math.floor(Math.random() * (max - min + 1)) + min;
    this.emailAuthenticationService.getEmailOTPFromMobileNumber(this.id, element.mobileNo).subscribe(
      (res: any) => {
        Swal.close();
        const dialogRef = this.dialog.open(OtpDialogComponent, { data: this.id});
        dialogRef.afterClosed().subscribe(OTP => {
          if (this.verifyOTP(OTP)) {
            Swal.fire(
              'Success!',
              `OTP Verified`,
              'success'
            )
            element.isPicked = 1;
            this.pkgService.updatePackage(element).subscribe((res:any) => {
            }, (error: any) => {
              console.log("Error in updatePackage", error);
              this.getData();
            })
          } else {
            Swal.fire(
              'Error!',
              `Invalid OTP!`,
              'error'
            )
            this.getData();
          }
          console.log(`Dialog result OTP: ${OTP}`);
        });
      }, (error: any) => {
        console.log("error in getOTP: ", error);
      })

  }

  otp: OTP = ({} as any) as OTP;

  verifyOTP(OTP: any){
    this.otp.id = this.id;
    this.otp.otp = OTP;
    this.emailAuthenticationService.sendOTP(this.otp).subscribe((res: any) => {
      console.log("VERIFYYYY: ", res);
      return res;
    },
    (error: any) => {
      console.log(error);
    })
    return -1;
  }

  openDialog(element: any) {
    const dialogRef = this.dialog.open(UpdateCourierComponent, {
      data: element
    });

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
          return compare(a.mobileNo, b.mobileNo, isAsc);
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