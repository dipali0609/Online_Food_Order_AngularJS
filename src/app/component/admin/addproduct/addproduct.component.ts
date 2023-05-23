import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/dao/item';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit
{


  item: Item;
  itemId: number;
  AddProductForm: any;

  constructor(private Service:FooddataService,private router:Router,
    private route :ActivatedRoute){}

  ngOnInit(): void {
    this.itemId=this.route.snapshot.params['itemId'];  //read from url(fect id)
      this.item=new Item(0,'',0,0,'',0);
    //if id!=-1 then only get the record
    console.log(this.itemId); //initially on form load get the data (first)
    this.Service.retriveProductId(this.itemId).subscribe(
      data=>this.item=data
    )
  }

  saveProduct(){
    //add record
    if(this.itemId==-1){
      this.Service.addProduct(this.item).subscribe(
        data=>this.router.navigate(['adminhome']) 
      )
     }else{
      this.Service.updateProduct(this.itemId,this.item).subscribe(
        data=>{
          console.log(data)
        //after update navigate to todo component ,inject an object of showcustomer
      this.router.navigate(['adminhome'])
        }
        )
     }
    }
}
