import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Cooperativa } from '../interfaces/cooperativa';


@Injectable({
  providedIn: 'root'
})
export class CooperativasService {
  

  constructor(private http: HttpClient) {}


  getAllcoperativas(){
    const urlapi = "http://127.0.0.1:8000/api/cooperativas";
    return this.http.get(urlapi);
  }
  
  saveCooperativa(cooperativo:Cooperativa){
    const urlapi = "http://127.0.0.1:8000/api/cooperativas";
    return this.http.post(urlapi, cooperativo,{} )
    .pipe(map(data=>data));
  }
}
