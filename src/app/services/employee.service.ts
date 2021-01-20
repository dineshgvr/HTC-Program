import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  employeePosts(employee: any): Observable<any> {
    let headersConfig = new HttpHeaders();
    headersConfig = headersConfig.set('Content-Type', 'application/json');
    return this.httpClient.post<any>('http://localhost:3000/employee', employee, {
      headers: headersConfig
    });
  }
}
