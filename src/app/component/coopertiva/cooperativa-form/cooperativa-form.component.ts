import { Component, OnInit } from '@angular/core';
import { CooperativasService } from 'src/app/services/cooperativas.service';
import { Cooperativa } from 'src/app/interfaces/cooperativa';
import {FormsModule, NgForm} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cooperativa-form',
  templateUrl: './cooperativa-form.component.html',
  styleUrls: ['./cooperativa-form.component.css']
})
export class CooperativaFormComponent implements OnInit {

  constructor(private cooperativasService: CooperativasService, private location:Location) { }

  ngOnInit() {
  }
  onSavecooperativa(cooperativaForm: NgForm):void{
    console.log(cooperativaForm.value);
    this.cooperativasService.saveCooperativa(cooperativaForm.value).subscribe(cooperativa=>location.reload());
  }
}
