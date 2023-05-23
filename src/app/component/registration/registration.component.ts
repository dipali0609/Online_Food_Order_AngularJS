import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cust } from 'src/app/dao/cust';
import { FooddataService } from 'src/app/service/data/fooddata.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit
{
  
  Cust:cust=new cust("","",0,"","");
  message:any;
  ResitionForm: any;
  searchValue: null;

  //cust1=this.route.snapshot.params['id'];
  ngOnInit(): void 
  {
    
  }

    constructor(private foodSerivice:FooddataService){}
    
    public registrationNow(){
      console.log("registrationNow()")
      let resp=this.foodSerivice.registartion(this.Cust);
      resp.subscribe((data: any)=>this.message=data)
    }


    clearText(){
      this.ResitionForm.setValue({ 
                                   customerfname: '',
                                   customerlname:'',
                                   customermobile:'',
                                   customeremailid:'',
                                   customerpassword:''
                                  });
    }


    clearSearch() {
      this.searchValue = null;
    }
  }


  
  


  
  