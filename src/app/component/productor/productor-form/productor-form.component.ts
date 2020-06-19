import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Location} from '@angular/common';
import {ProductoresService} from 'src/app/services/productores.service';
import { CooperativasService } from 'src/app/services/cooperativas.service';
import { Cooperativa } from 'src/app/interfaces/cooperativa';

@Component({
  selector: 'app-productor-form',
  templateUrl: './productor-form.component.html',
  styleUrls: ['./productor-form.component.css']
})
export class ProductorFormComponent implements OnInit {

  cooperativa: Cooperativa[];
  constructor(private productorService: ProductoresService,private location:Location,cooperativasService: CooperativasService) { 
    cooperativasService.getAllcoperativas().subscribe((data: Cooperativa[])=>{this.cooperativa=data});

  }

  ngOnInit() {
  }
  onSaveproductor(productorForm: NgForm):void{
    console.log(productorForm.value);
    this.productorService.saveProductor(productorForm.value).subscribe(productor=>location.reload());
  }
}
