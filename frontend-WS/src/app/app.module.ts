import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeaponlistComponent } from './weaponlist/weaponlist.component';
import { WeaponentityComponent } from './weaponentity/weaponentity.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { bookService } from './services/bookService';
import { MaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { LkComponent } from './lk/lk.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { WeapondetailsComponent } from './weapondetails/weapondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponlistComponent,
    WeaponentityComponent,
    SignUpComponent,
    LoginComponent,
    UserListComponent,
    LkComponent,
    AdminComponent,
    MainComponent,
    WeapondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    AgChartsAngularModule
  ],
  providers: [bookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
