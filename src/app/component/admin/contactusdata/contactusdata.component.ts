import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-contactusdata',
  templateUrl: './contactusdata.component.html',
  styleUrls: ['./contactusdata.component.css']
})
export class ContactusdataComponent implements OnInit
{


  contacts:contact[] = [];
 
  constructor(private foodSerivice:FooddataService,private router:Router)
  {
  
  }
  ngOnInit(): void 
  {
    this.retriveAllContact();
  }
  
 

  retriveAllContact()
{
  this.foodSerivice.retriveAllContact().subscribe(
    response=>{
      console.log(response);
      this.contacts=response;
    }
  )
}
}

  export class contact
  {
            constructor(
              public  contactname:string,
            public contactemailid:string,
            public contactmessage:string
           
            ){}
   }

