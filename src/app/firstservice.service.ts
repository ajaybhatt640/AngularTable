import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }
arr = [{
    "FirstName": "Ajay",
    "LastName": "Bhatt",
    "Email": "ajay@gmail.com",
    "Id": 1,
    "PhoneNumber": 8077546338,
    "Designation": "Software Engg. Trainee",
    "DOB": '18/07/1997'
},
{
    "FirstName": "Pranjal",
    "LastName": "Chamola",
    "Email": "pranjal@gmail.com",
    "Id": 2,
    "PhoneNumber": 9777888123,
    "Designation": "Trainee",
    "DOB": '26/11/1997'
},
{
    "FirstName": "Navtej",
    "LastName": "Singh",
    "Email": "nav@gmail.com",
    "Id": 3,
    "PhoneNumber": 892638472,
    "Designation": "Quality analyst",
    "DOB": '20/01/1987'
},
{
    "FirstName": "saurav",
    "LastName": "Rawat",
    "Email": "saurav@gmail.com",
    "Id": 4,
    "PhoneNumber": 9991234592,
    "Designation": "Software Engineer",
    "DOB": '13/06/1995'
}

]
  newArray;

  setdata() {
    this.newArray = this.arr;
  }
  getdata() {
    return this.newArray;
  }
}
