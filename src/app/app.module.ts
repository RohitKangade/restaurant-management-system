import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { RegitrationComponent } from './regitration/regitration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AddcartComponent } from './addcart/addcart.component';
import { PaymentComponent } from './payment/payment.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { DeleteFoodItemComponent } from './delete-food-item/delete-food-item.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { BookTableComponent } from './book-table/book-table.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { HappyClientsComponent } from './happy-clients/happy-clients.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartService } from './cart.service';
import { ImageServiceService } from './image-service.service';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegitrationComponent,
    NotFoundComponent,
    MenuComponent,
    HomeComponent,
    CarouselComponent,
    AddcartComponent,
    PaymentComponent,
    AddFoodComponent,
    AdminControlComponent,
    DeleteFoodItemComponent,
    AdminloginComponent,
    AdminRegistrationComponent,
    BookTableComponent,
    FeedbackformComponent,
    HappyClientsComponent,
    AboutUsComponent,
    ManagerComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [CartService,ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
