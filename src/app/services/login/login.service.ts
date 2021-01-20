import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly httpClient: HttpClient) {}

  public getLoadLocalDBUser(): Observable<any> {
    return this.httpClient.get('../../assets/json/users.json');
  }
}
