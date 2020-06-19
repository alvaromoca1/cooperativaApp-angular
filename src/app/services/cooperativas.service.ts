import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CooperativasService {
  

  constructor(private http: HttpClient) {}


  getAllcoperativas(){
    const urlapi = "http://127.0.0.1:8000/api/cooperativas";
    return this.http.get(urlapi);
  }
}
