import { Component, OnInit } from '@angular/core';
import { ProductoresService } from 'src/app/services/productores.service';
import { Productor } from 'src/app/interfaces/productor';

@Component({
  selector: 'app-productor-index',
  templateUrl: './productor-index.component.html',
  styleUrls: ['./productor-index.component.css']
})
export class ProductorIndexComponent implements OnInit {

  productores: Productor[];
  constructor(productoresService: ProductoresService) {
    productoresService.getAllproductores().subscribe((data: Productor[])=>{this.productores=data});
   }

  ngOnInit() {
  }

}
