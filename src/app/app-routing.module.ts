import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MycardComponent } from './mycard/mycard.component';
const routes: Routes = [
  { path: '',component:LoginComponent },
  { path: 'login', component:LoginComponent },
  { path:'register',component:RegisterComponent},
  { path:'profile/:id',component:MyprofileComponent},
  { path:'mycard/:id',component:MycardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
