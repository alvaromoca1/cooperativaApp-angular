import { Component, OnInit } from '@angular/core';
import { CooperativasService } from 'src/app/services/cooperativas.service';
import { Cooperativa } from 'src/app/interfaces/cooperativa';
import {FormsModule, NgForm} from '@angular/forms';
import {Location} from '@angular/common';
import { ProductoresService } from 'src/app/services/productores.service';
import { Productor } from 'src/app/interfaces/productor';

@Component({
  selector: 'app-cooperativa-form',
  templateUrl: './cooperativa-form.component.html',
  styleUrls: ['./cooperativa-form.component.css']
})
export class CooperativaFormComponent implements OnInit {
  
  productores: Productor[];
  constructor(private cooperativasService: CooperativasService, private location:Location, productoresService: ProductoresService) { 
    productoresService.getAllproductores().subscribe((data: Productor[])=>{this.productores = data });

  }

  ngOnInit() {
  }
  onSavecooperativa(cooperativaForm: NgForm):void{
    console.log(cooperativaForm.value);
    this.cooperativasService.saveCooperativa(cooperativaForm.value).subscribe(cooperativa=>location.reload());
  }
}
