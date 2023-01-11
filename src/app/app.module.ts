import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployeCreateComponent } from './employe/employe-create/employe-create.component';
import { EmployeEditComponent } from './employe/employe-edit/employe-edit.component';
import { ListEmployeComponent } from './employe/list-employe/list-employe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialCreateComponent } from './material/material-create/material-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialEditComponent } from './material/material-edit/material-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    EmployeComponent,
    EmployeCreateComponent,
    EmployeEditComponent,
    ListEmployeComponent,
    NavbarComponent,
    MaterialCreateComponent,
    MaterialEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
