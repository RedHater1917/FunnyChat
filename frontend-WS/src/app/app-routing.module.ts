import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaponlistComponent } from './weaponlist/weaponlist.component';
import { WeaponentityComponent } from './weaponentity/weaponentity.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { MainComponent } from './main/main.component';
import { LkComponent } from './lk/lk.component';
import { WeapondetailsComponent } from './weapondetails/weapondetails.component';


const routes: Routes = [
{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: 'main', component: MainComponent},
{ path: 'bookentity/:id', component: WeaponentityComponent},
{ path: 'buyBook/:id', component: WeapondetailsComponent},
{ path: 'sign-up', component: SignUpComponent},
{ path: 'lk', component: LkComponent},
{ path: 'login', component: LoginComponent},
{ path: 'users', component: UserListComponent},
{ path: 'books', component: WeaponlistComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
