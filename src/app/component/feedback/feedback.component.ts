import { Component, OnInit } from '@angular/core';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit
{
  con:Feed=new Feed("","","","");
  message:any;

  ngOnInit(): void {
  
  }
  constructor(private foodSerivice:FooddataService){}
    
  public feedback(){
    console.log("feedaback()")
    let resp=this.foodSerivice.feedabackus(this.con);
    resp.subscribe((data: any)=>this.message=data)
  }

}
export class Feed
   {
             constructor(
             public name:string,
             public email:string,
             public subject:string,
             public message:string
             ){}
    }