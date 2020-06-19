import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  constructor(private http: HttpClient) { }
  getAllproductores(){
    const urlapi = "http://127.0.0.1:8000/api/productores";
    return this.http.get(urlapi);
  }
}
