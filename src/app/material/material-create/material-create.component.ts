import { Component, OnInit, Type } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { material } from 'src/app/models/Material';
import { MaterialService } from 'src/app/services/material.service';


@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.component.html',
  styleUrls: ['./material-create.component.css']
})
export class MaterialCreateComponent implements OnInit {

  materialForm : FormGroup;

  constructor(private _fb : FormBuilder,private _materialService : MaterialService ,
 private _router : Router) {
          this.materialForm = this._fb.group({
            Brand : [null,[Validators.required]],
            Type : [null,[Validators.required ]],
            RegistrationNumber : [null,[Validators.required]],
            GrayCardNumber : [null,[Validators.required]],
            ContractType : [null,[Validators.required]],
            ContractName : [null,[Validators.required]]

          })

  }

  ngOnInit(): void {

  }

  createMaterial(){
    if(this.materialForm.valid){
      let proform : material = this.materialForm.value;
      this._materialService.create(proform).subscribe();
      this.materialForm.reset();
      this._router.navigate(['/material']);
    }

  }



}
