import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getData(type: string) {
    return this.http.get(`http://localhost:3000/${type}`)
  }

  deleteData(type: string, id: any) {
   return this.http.delete(`http://localhost:3000/${type}/${id}`)
  }

  createData(type: string, data: any) {
    return this.http.post(`http://localhost:3000/${type}`, data)
  }

}
