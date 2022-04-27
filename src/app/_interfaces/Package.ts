export interface Package {
    // uuid: number;
    packageNumber: number;
    name:string;
    courier: string;
    //receivingDate:Date;
    receivingDate: string;
    orderId:string;
    //isPicked: boolean;
     pickedBy: string;
     //pickDate:Date;
  //  recieverPhotoPath:string;
}