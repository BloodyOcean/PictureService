import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './add-image/add-image.component';
import { HomeComponent } from './home/home.component';
import { ShowImageComponent } from './show-image/show-image.component';

const routes: Routes = [
  {
    path:'', 
    component:HomeComponent,
    children: [
      {path:'add', component:AddImageComponent},
      {path:'images', component:ShowImageComponent}
    ], 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
