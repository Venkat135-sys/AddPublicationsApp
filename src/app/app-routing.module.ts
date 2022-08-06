import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path:"addPublication",component:FormComponent },
  { path:"filter", component:FilterComponent},
  { path:"",redirectTo:"/addPublication",pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
