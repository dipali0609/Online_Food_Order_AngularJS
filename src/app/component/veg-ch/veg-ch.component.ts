import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/dao/item';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-veg-ch',
  templateUrl: './veg-ch.component.html',
  styleUrls: ['./veg-ch.component.css']
})
export class VegChComponent 
{
 

  items:Item[] = [];
  constructor(private foodSerivice:FooddataService,private router:Router)
  {
  
  }
  ngOnInit(): void 
  {
    this.retriveAllItems();
    
  }
  
 

  retriveAllItems()
{
  this.foodSerivice.retriveAllItems().subscribe(
    response=>{
      console.log(response);
      this.items=response;
    }
  )
}

//delete item 
deleteitem(itemId:number){

  this.foodSerivice.deleteItemById(itemId).subscribe(
    (    Response: any)=>{
     console.log(`Response=${Response}`);
      this.retriveAllItems();
    }
  )
}
updateitem(itemId:number){
  console.log(`item id=${itemId}`);  
  this.router.navigate(['mycarttable',itemId]);
}

//add product
addProduct1(){
  console.log("addproduct")
  this.router.navigate(['mycarttable',-1]);
}

}