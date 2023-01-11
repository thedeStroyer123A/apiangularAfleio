import { Component , OnInit } from '@angular/core';
import { material } from 'src/app/models/Material';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent  implements OnInit{

  materialForm : FormGroup;
  materialId! : string;
  material! : material;

  constructor(private _fb :FormBuilder, private _activeRoute : ActivatedRoute,
            private _materialService :MaterialService, private _router :Router){
        this.materialForm = this._fb.group({
          Brand : [null,[Validators.required]],
          Type : [null,[Validators.required ]],
          RegistationNumber : [null,[Validators.required]],
          GrayCardNumber : [null,[Validators.required]],
          ContractType : [null,[Validators.required]],
          ContractName : [null,[Validators.required]]
        })
  }

  ngOnInit(): void {
    //recuperation id
    this.materialId = this. _activeRoute.snapshot.params['id'];
    this._materialService.getById(this.materialId).subscribe({
      next : (res) => {
        this.material = res;
        this.materialForm.patchValue({
          Brand : this.material.Brand,
          Type : this.material.Type,
          RegistationNumber : this.material.RegistrationNumber,
          GrayCardNumber : this.material.GrayCardNumber,
          ContractType : this.material.ContractType,
          ContractName :this.material.ContractName

        })

      }
    })

  }

  updatematerial() {
    if(this.materialForm.valid){
      let materialUpdate:material =this.materialForm.value;
      this._materialService.update(materialUpdate,this.materialId).subscribe({
        next : (res) => {
          this._router.navigateByUrl('/materiel')
        }
      })
    }
    else{
      this.materialForm.markAllAsTouched();

    }


  }

}
