import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  addr:Addr=new Addr("","","","","");
  message:any;

  ngOnInit(): void {
  
  }
  constructor(private foodSerivice:FooddataService, private  rounter:Router){}
    
  public Order(){
    
    let resp=this.foodSerivice.Order(this.addr);
    resp.subscribe((data: any)=>this.message=data)
   
  this.rounter.navigate(['Payment'])
 
  }

}
export class Addr
   {
             constructor(
             public area:string,
             public city:string,
             public country:string,
             public pincode:string,
             public state:string
             
             ){}
    
}
