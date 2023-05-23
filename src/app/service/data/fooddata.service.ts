
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from 'src/app/component/admin/contactusdata/contactusdata.component';
import { feedback } from 'src/app/component/admin/feedbackdata/feedbackdata.component';
import { Con } from 'src/app/component/contactus/contactus.component';
import { Feed } from 'src/app/component/feedback/feedback.component';
import { Item2 } from 'src/app/component/my-cart/my-cart.component';
import { Addr } from 'src/app/component/order/order.component';

import { cust } from 'src/app/dao/cust';
import { Item } from 'src/app/dao/item';
import { Payment } from 'src/app/dao/payment';


@Injectable({
  providedIn: 'root'
})
export class FooddataService {
  deleteById(itemId: number) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http:HttpClient) { }

  retriveAllCustomers(){
    return this.http.get<cust[]>(`http://localhost:8888/retrivedData`);
  }

  public registartion(user: cust){
    console.log("registartion");
    return this.http.post("http://localhost:8888/CustomerRegistration",user,{responseType:'text' as 'json'}  )

  }

  contactUs(con: Con) {
    return this.http.post("http://localhost:8888/saveContact",con,{responseType:'text' as 'json'}  )
  }

  feedabackus(con: Feed) {
    return this.http.post("http://localhost:8888/saveFeedback",con,{responseType:'text' as 'json'}  )
  }


  handleLogin(email:string){
    return this.http.get("http://localhost:8888/logincheck/"+email,{responseType:'text' as 'json'});
  }

  retriveAllItems(){
    return this.http.get<Item[]>(` http://localhost:8888/retriveAllItem`);
  }

  Order(addr: Addr) {
    return this.http.post("http://localhost:8888/saveAddress",addr,{responseType:'text' as 'json'} );
  }
 
  logout(){
    sessionStorage.removeItem('authenticateuser');
  }


  retriveAllContact(){
    return this.http.get<contact[]>(`http://localhost:8888/retriveddata`);
  }

  retriveAllFeedback(){
    return this.http.get<feedback[]>(`http://localhost:8888/retrivedAllData`);
  }
  

  //delete item
  deleteItemById(item_id:number){
    return this.http.delete<Item[]>(`http://localhost:8888/removeItem/${item_id}`);
 }


 addProduct(item: Item){
  return this.http.post<Item>(`http://localhost:8888/saveItem`,item);       
 }

 //update by id
updateProduct(itemId:number,item: Item){
 return this.http.put<Item>(`http://localhost:8888/updateItem/${itemId}`,item);
}


//find ietm By Id
retriveProductId(itemId:number){
  return this.http.get<Item>(`http://localhost:8888/viewItemById/${itemId}`);
 }


 addProduct1(item: Item){
  return this.http.post<Item>(`http://localhost:8888/saveItemCart`,item);       
 }


 retriveAllcart(){
  return this.http.get<Item[]>(` http://localhost:8888/addToCart`);
}
 
deletecartById(item_id:number){
  return this.http.delete<Item[]>(`http://localhost:8888/deletebyid/${item_id}`);
}

public addToOrder(){
  
  return this.http.post("http://localhost:8888/savedata",{responseType:'text' as 'json'}  )

}

totalbill(){
  return this.http.get<Item>(`http://localhost:8888/totalbill`);
 }


 retriveAllNonItems(){
  return this.http.get<Item[]>(` http://localhost:8888/retriveAllNonItem`);
}



//add payment details
savepaymentdetails(payment:Payment){
  return this.http.post<Payment>(`http://localhost:8888/savePayment`,payment,{responseType:'text' as 'json'}); 
}
}


