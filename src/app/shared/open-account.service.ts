import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenAccount } from './openAccount';


@Injectable({
  providedIn: 'root'
})
export class OpenAccountService {
  baseUrl = "";


  constructor(public http:HttpClient) { }

  addAccountData(newAccount:OpenAccount): Observable<OpenAccount>{
    return this.http.post<OpenAccount>(this.baseUrl, newAccount);
  }
}
