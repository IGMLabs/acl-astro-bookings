import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../core/api/login.interface";
import { Register } from "../core/api/register.interface";

@Injectable({
  providedIn: 'root',
})
export class AuthApi {

  private url =' http://localhost:3000/';

  constructor(private http: HttpClient) {

  }

  public postRegister$(register: Register) {
      return this.http.post(this.url+'register',register);
  }

  public postLogin$(login: Login) {
      return this.http.post(this.url+'login',login);
  }
}
