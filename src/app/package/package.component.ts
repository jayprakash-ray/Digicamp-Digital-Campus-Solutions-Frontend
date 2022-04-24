import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FaceDetectionComponent } from '../face-detection/face-detection.component';
import { PackageFormComponent } from '../package-form/package-form.component';
import { Package } from '../_interfaces/Package';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  public packageTableColumns = ['packageNumber', 'name', 'courier', 'receivingDate', 'orderId', 'pickPackage']
  // public packageDataSource = new MatTableDataSource<Package>();
  packageData: Package[] = [{ packageNumber: 1, name: 'khushal', courier: 'amazon', receivingDate: '11', orderId: "12" }]
  public packageDataSource = new MatTableDataSource<Package>(this.packageData);
  @ViewChild(MatSort) sort: MatSort;
  sortedPackageDate: Package[];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: any) { }

  sortData(sort: Sort) {
    const packageData: Package[] = this.packageDataSource.filteredData;
    if (!sort.active || sort.direction === '') {
      this.sortedPackageDate = packageData;
      return;
    }
    this.sortedPackageDate = packageData.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'packageNumber':
          return compare(a.packageNumber, b.packageNumber, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'courier':
          return compare(a.courier, b.courier, isAsc);
        case 'receivingDate':
          return compare(a.receivingDate, b.receivingDate, isAsc);
        case 'orderId':
          return compare(a.orderId, b.orderId, isAsc);
        default:
          return 0;
      }
    });
    this.packageDataSource.sort = this.sort;
  }

  pickPackage(element: any) {
    const dialogRef = this.dialog.open(PackageFormComponent, { data: element });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        // FaceDetectionComponent.stopCamera();
        //mark package as picked 
      }
    })
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}