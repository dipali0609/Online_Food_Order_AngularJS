import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './component/registration/registration.component';
import { ShowdataComponent } from './component/showdata/showdata.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { CustomerHomeComponent } from './component/customer-home/customer-home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { VegComponent } from './component/veg/veg.component';
import { AboutComponent } from './component/about/about.component';
import { VegCComponent } from './component/veg-c/veg-c.component';
import { OrderComponent } from './component/order/order.component';
import { PaymentComponent } from './component/payment/payment.component';
import { VegChComponent } from './component/veg-ch/veg-ch.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './component/admin/adminhome/adminhome.component';
import { ContactusdataComponent } from './component/admin/contactusdata/contactusdata.component';
import { FeedbackdataComponent } from './component/admin/feedbackdata/feedbackdata.component';
import { AddproductComponent } from './component/admin/addproduct/addproduct.component';
import { MycarttableComponent } from './component/mycarttable/mycarttable.component';
import { MyCartComponent } from './component/my-cart/my-cart.component';
import { NonvegCComponent } from './component/nonveg-c/nonveg-c.component';
import { NonvegComponent } from './component/nonveg/nonveg.component';
import { NonvegChComponent } from './component/nonveg-ch/nonveg-ch.component';
import { PaydoneComponent } from './component/paydone/paydone.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ShowdataComponent,
    HomeComponent,
    ContactusComponent,
    FeedbackComponent,
    CustomerHomeComponent,
    LogoutComponent,
    VegComponent,
    AboutComponent,
    VegCComponent,
    OrderComponent,
    PaymentComponent,
    VegChComponent,
    AdminloginComponent,
    AdminhomeComponent,
    ContactusdataComponent,
    FeedbackdataComponent,
    AddproductComponent,
    MycarttableComponent,
    MyCartComponent,
    NonvegCComponent,
    NonvegComponent,
    NonvegChComponent,
    PaydoneComponent,
   
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 

}
