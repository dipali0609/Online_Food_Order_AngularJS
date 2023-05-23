import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/dao/item';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit
 {
  bill1:number;
  
  items:Item[] = [];

  itemss:Item2=new Item2(0,"",0,0,0);
  message: any;
  quantity: any;
  cost: any;
  
  
  constructor(private foodSerivice:FooddataService,private router:Router)
  {
  
  }
  ngOnInit(): void 
  {
    this.retriveAllcart();
    
  }
  
  //delete item 
deleteitem(itemId:number){

  this.foodSerivice.deletecartById(itemId).subscribe(
    (    Response: any)=>{
     console.log(`Response=${Response}`);
      this.retriveAllcart();
    }
  )
}


  retriveAllcart()
{
  this.foodSerivice.retriveAllcart().subscribe(
    response=>{
      console.log(response);
      this.items=response;
    }
  )
}

public addToORder(){
  console.log("registrationNow()")
  let resp=this.foodSerivice.addToOrder();
  resp.
 subscribe(
    data=>this.router.navigate(['order']) )
console.log("wevhg")

}

totalbill()
{
  this.foodSerivice.totalbill().subscribe(
    (data: any)=>this.message=data)
   
  
}

 }
//   let resp=this.foodSerivice.Order(this.addr);
    // resp.subscribe((data: any)=>this.message=data)

 export class Item2{

  constructor(
      public itemId:number,
      public itemName:string,
      public cost:number,
      public  quantity:number,
     public totalbill:number
      ){}
}



 

