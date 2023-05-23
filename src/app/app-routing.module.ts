import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ShowdataComponent } from './component/showdata/showdata.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { CustomerHomeComponent } from './component/customer-home/customer-home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AboutComponent } from './component/about/about.component';
import { VegComponent } from './component/veg/veg.component';
import { VegCComponent } from './component/veg-c/veg-c.component';
import { OrderComponent } from './component/order/order.component';
import { VegChComponent } from './component/veg-ch/veg-ch.component';
import { PaymentComponent } from './component/payment/payment.component';
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



const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'showdata',component:ShowdataComponent},
  {path:"",component:HomeComponent},
  {path:'header', component:HeaderComponent},
  {path:"contact",component:ContactusComponent},
  {path:"feedback", component:FeedbackComponent},
  {path:"Chome",component:CustomerHomeComponent},
  {path:"logout",component:LogoutComponent},
  {path:"veg", component:VegComponent},
  {path:"vegC", component:VegCComponent},
  {path:"about", component:AboutComponent},
  {path:"order", component:OrderComponent},
  {path:"vegCh", component:VegChComponent},
  {path:"Payment", component:PaymentComponent},
  {path:"mycarttable/:itemId", component:MycarttableComponent},
  {path:"myCart", component:MyCartComponent},
  {path:"nonvegC", component:NonvegCComponent},
  {path:"nonveg", component:NonvegComponent},
  {path:"nonvegCh", component:NonvegChComponent},
  {path:"pdone", component:PaydoneComponent},



  {path:"adminlogin", component:AdminloginComponent},
  {path:"adminhome", component:AdminhomeComponent},
  {path:"contactdata",component:ContactusdataComponent},
  {path:"feedbackdata", component:FeedbackdataComponent},
  {path:"Addproduct/:itemId", component:AddproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
