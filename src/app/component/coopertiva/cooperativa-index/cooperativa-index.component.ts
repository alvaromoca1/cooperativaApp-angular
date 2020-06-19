import { Component, OnInit } from '@angular/core';
import { CooperativasService } from 'src/app/services/cooperativas.service';
import { Cooperativa } from 'src/app/interfaces/cooperativa';

@Component({
  selector: 'app-cooperativa-index',
  templateUrl: './cooperativa-index.component.html',
  styleUrls: ['./cooperativa-index.component.css']
})
export class CooperativaIndexComponent implements OnInit {

  cooperativa: Cooperativa[];
  constructor( cooperativasService: CooperativasService) {
    //this.datas = cooperativasService.TestMethod();
    cooperativasService.getAllcoperativas().subscribe((data: Cooperativa[])=>{this.cooperativa=data});
    
   }

  ngOnInit() {
  }

}
