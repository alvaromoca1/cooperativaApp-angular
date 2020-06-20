import { Component, OnInit } from '@angular/core';
import { CooperativasService } from 'src/app/services/cooperativas.service';
import { Cooperativa } from 'src/app/interfaces/cooperativa';
import { ProductoresService } from 'src/app/services/productores.service';
import { Productor } from 'src/app/interfaces/productor';


@Component({
  selector: 'app-cooperativa-index',
  templateUrl: './cooperativa-index.component.html',
  styleUrls: ['./cooperativa-index.component.css']
})
export class CooperativaIndexComponent implements OnInit {

  cooperativa: Cooperativa[];
  productores: Productor[];
  constructor( cooperativasService: CooperativasService, productoresService: ProductoresService) {
    //this.datas = cooperativasService.TestMethod();
    cooperativasService.getAllcoperativas().subscribe((data: Cooperativa[])=>{this.cooperativa=data});
    productoresService.getAllproductores().subscribe((data: Productor[])=>{this.productores = data });
   }

  ngOnInit() {
  }

}
