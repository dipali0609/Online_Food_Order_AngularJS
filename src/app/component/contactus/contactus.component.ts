import { Component, OnInit } from '@angular/core';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit
 {

  con:Con=new Con("","","");
  message:any;

  ngOnInit(): void {
  
  }
  constructor(private foodSerivice:FooddataService){}
    
  public contactus(){
    console.log("contactus()")
    let resp=this.foodSerivice.contactUs(this.con);
    resp.subscribe((data: any)=>this.message=data)
  }

}
export class Con
   {
             constructor(
             public name:string,
             public email:string,
             public message:string
             ){}
    }