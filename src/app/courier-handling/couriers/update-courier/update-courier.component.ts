import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Package } from 'src/app/_interfaces/Package';
import { PackageHandlingService } from 'src/app/_services/package-handling.service';

@Component({
  selector: 'app-update-courier',
  templateUrl: './update-courier.component.html',
  styleUrls: ['./update-courier.component.scss']
})
export class UpdateCourierComponent implements OnInit {
  courier: Package = ({} as any) as Package;
  returnedObj:any;
  
  constructor(public packageHandlingService:PackageHandlingService,
    @Inject(MAT_DIALOG_DATA) public element: any) {
      this.courier = this.element;
      console.log("this.element: ", this.courier);
  }

  ngOnInit(): void {
  }
  
  updateCourier(item:any)
  {
    console.log("item: ", item);
    this.courier.ownerName=item.value.ownerName;
    this.courier.orderId=item.value.orderId;
    this.courier.arrivalDate=item.value.arrivalDate;
    this.courier.mobileNo=item.value.mobileNo;
    this.courier.courier=item.value.delpartner;
    this.packageHandlingService.updatePackage(this.courier).subscribe((res) => {
      console.log("Item Added: ", res);
      this.returnedObj = res;
    });

  }

 
}
