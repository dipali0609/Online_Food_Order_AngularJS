import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cust } from 'src/app/dao/cust';

import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit
 {
  
  custs:cust[] = [];

  constructor(private foodSerivice:FooddataService,private router:Router)
  {
  
  }
  ngOnInit(): void {
    this.refreshcust();
  }

  refreshcust()
{
  this.foodSerivice.retriveAllCustomers().subscribe(
    response=>{
      console.log(response);
      this.custs=response;
    }
  )
}


// addToData(){
//   console.log("addtodata")
//   this.router.navigate(['cust']); //navigate with -1 to add
//   }

}

