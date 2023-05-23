import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {
  email:string="";
  pass:string="";
  invalidLogin=false;
  errormessage='invalid credentials';
  message:any;
 data:any

  constructor(private  rounter:Router, private service:FooddataService){}
  ngOnInit(): void {
    
  }

  handleLogin()
  {
  let res=this.service.handleLogin(this.email);
let resp=res.subscribe((data)=>this.message=data)
 //if(this.message==="Loginsuccesfull")
 console.log(this.message);

 if(this.message==="Loginsuccesfull")
 {
  
  this.rounter.navigate(['Chome'])
 }
 else{
  console.log("Invalid userhwhj");
 }
}
 } 


