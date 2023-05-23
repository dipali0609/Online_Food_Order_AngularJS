import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/dao/item';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css']
})
export class NonvegComponent implements OnInit
{

  items:Item[] = [];
  constructor(private foodSerivice:FooddataService,private router:Router)
  {
  
  }
  ngOnInit(): void 
  {
    this.retriveAllNonItems();
    
  }
  
 

  retriveAllNonItems()
{
  this.foodSerivice.retriveAllNonItems().subscribe(
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
      this.retriveAllNonItems();
    }
  )
}
updateitem(itemId:number){
  console.log(`item id=${itemId}`);  
  this.router.navigate(['Addproduct',itemId]);
}

//add product
addProduct(){
  console.log("addproduct")
  this.router.navigate(['Addproduct',-1]);
}

}
