import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit
{
  adminname="";
  adminpass="";
  invalidlogin=false;
  errorMessage="Invalid admin Credentials";

  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  clicklogin(): void{
    console.log(this.adminname);
    console.log(this.adminpass);
    if(this.adminname=='admin'&& this.adminpass==='admin'){
       this.invalidlogin=false;
      this.router.navigate(['adminhome']);   
    }else{
      this.invalidlogin=true;
    }
    }
}
