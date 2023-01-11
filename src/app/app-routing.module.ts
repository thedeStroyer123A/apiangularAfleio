import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialCreateComponent } from './material/material-create/material-create.component';
import { MaterialEditComponent } from './material/material-edit/material-edit.component';

const routes: Routes = [
  {path : "material",component : MaterialCreateComponent},
  {path : "add-material",component : MaterialCreateComponent},
  {path : "edit-material",component :MaterialEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
