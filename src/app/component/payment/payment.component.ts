import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/dao/payment';
import { FooddataService } from 'src/app/service/data/fooddata.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent 
 {

  payment: Payment=new Payment(0,'',0,'','','',0);
  message: any;
  message1: any;
  constructor(private foodSerivice:FooddataService,private router:Router)
  {
  
  }

  totalbill()
{
  this.foodSerivice.totalbill().subscribe(
    (data: any)=>this.message=data)
   
  
}
 
//payment: Payment=new Payment();

  MakePayment(){
    let response=this.foodSerivice.savepaymentdetails(this.payment);
    response.subscribe((data)=>this.message1=data);
    if(this.message1==="Payment Successfully"){
      this.router.navigate(['pdone']);
    }else if(this.message1==="Error in payment"){
      console.log("Error in payment");
    }
  }


}

