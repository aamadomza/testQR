import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  public data: any;

  getData() {
    this.http.get('https://ip-api.com/#google.com').subscribe(
      (response) => {
        this.data = response;
        console.log(response);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
