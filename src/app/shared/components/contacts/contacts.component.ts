import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  contactsHostel = [
    {
      designation: "Hostel Warden (MH)",
      name: "Prof. Shiva Kumar Malapaka ",
      email: "warden-mens-hostel@iiitb.ac.in"
    }, {
      designation: "Hostel Warden (WH)",
      name: "Prof. Jaya Sreevalsan Nair ",
      email: "warden-womens-hostel@iiitb.ac.in"
    }, {
      designation: "Hostel Warden (WH)",
      name: "Prof. Nanditha Rao ",
      email: "nanditha.rao@iiitb.ac.in"
    }, {
      designation: "Hostel Warden (MH)",
      name: "Prof. Uttam Kumar ",
      email: "uttam@iiitb.ac.in"
    }, {
      designation: "Hostel (WH) – staff",
      name: "Akshatha P B ",
      email: "akshatha.pb@iiitb.ac.in"
    }, {
      designation: "Hostel (MH) – staff",
      name: "Shiva Prakash ",
      email: "shivaprakash@iiitb.ac.in"
    }
  ]

  contactsAdministration = [
    {
      designation: "Registrar",
      name: " Cmde S. R. Sridhar",
      email: " registrar@iiitb.ac.in"
    },{
      designation: "Coordinator (CSA)",
      name: " Prof. Amit Prakash",
      email: " csa@iiitb.ac.in"
    },{
      designation: "Coordinator (Registrar Office)",
      name: " Akshatha P B ",
      email: "registrar-office@iiitb.ac.in"
    },
  ]


  ngOnInit(): void {
  }

}
