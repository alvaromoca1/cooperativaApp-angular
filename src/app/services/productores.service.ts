import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Productor } from '../interfaces/productor';


@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  constructor(private http: HttpClient) { }
  getAllproductores(){
    const urlapi = "http://127.0.0.1:8000/api/productores";
    return this.http.get(urlapi);
  }
  saveProductor(productor:Productor){
    const urlapi = "http://127.0.0.1:8000/api/productores";
    return this.http.post(urlapi, productor,{} )
    .pipe(map(data=>data));
  }
}
