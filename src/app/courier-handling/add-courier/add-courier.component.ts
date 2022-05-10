import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Package } from 'src/app/_interfaces/Package';
import { PackageHandlingService } from 'src/app/_services/package-handling.service';


@Component({
  selector: 'app-add-courier',
  templateUrl: './add-courier.component.html',
  styleUrls: ['./add-courier.component.scss']
})
export class AddCourierComponent implements OnInit {

  courier: Package = ({} as any) as Package;
  returnedObj:any;
  constructor(public PackageHandlingService:PackageHandlingService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  snackRef: any;
  openSnackBar(message: string) {
    this.snackRef = this._snackBar.open(message);
  }

  dismiss(snackRef: any){
    setTimeout(function(){ 
    snackRef.dismiss();
    }, 1000);
  }

  addCourier(item:any)
  {
    console.log("item: ", item);
    this.courier.ownerName=item.value.ownerName;
    this.courier.orderId=item.value.orderId;
    this.courier.arrivalDate=item.value.arrivalDate;
    this.courier.mobileNo=item.value.mobileNo;
    this.courier.courier=item.value.delpartner;
    item.reset();
    this.PackageHandlingService.addPackage(this.courier).subscribe((res) => {
      console.log("Item Added: ", res);
      this.returnedObj = res;
      this.openSnackBar("Package Added");
      this.dismiss(this.snackRef);
    });
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
  readonly phoneFormControl = new FormControl('', [
    Validators.required, Validators.pattern(("[6-9]\\d{9}"))
  ]);
}
