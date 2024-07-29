import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegitrationComponent } from './regitration/regitration.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AddcartComponent } from './addcart/addcart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { DeleteFoodItemComponent } from './delete-food-item/delete-food-item.component';
import { BookTableComponent } from './book-table/book-table.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'; 
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "addcart", component: AddcartComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegitrationComponent },
  { path: "seemenu", component: MenuComponent },
  { path: 'payment', component: PaymentComponent },
  { path: "admincontrol", component: AdminControlComponent },
  { path: "add-food", component: AddFoodComponent },
  { path: "delete-food", component: DeleteFoodItemComponent },
  { path: "bookTable", component: BookTableComponent },
  { path: "adminlogin", component: AdminloginComponent },
  { path: "adminreg", component: AdminRegistrationComponent },
  { path: "feedback", component: FeedbackformComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "manager", component: ManagerComponent },
 { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
