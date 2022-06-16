import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../core/api/login.interface";
import { Register } from "../core/api/register.interface";
import { tap } from 'rxjs';
import { AuthResponse } from "./auth-response.interface";

@Injectable({
  providedIn: 'root',
})
export class AuthApi {

  private url =' http://localhost:3000/';

  public accessToken = '';

  constructor(private http: HttpClient) {

  }

  public postRegister$(register: Register) {
      return this.http.post(this.url+'register',register);
  }

  public postLogin$(login: Login) {
      return this.http.post<AuthResponse>(this.url+'login',login)
      .pipe( tap(response=> this.accessToken = response.accessToken) );
  }
}
