import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../core/api/login.interface";
import { Register } from "../core/api/register.interface";
import { tap } from 'rxjs';
import { AuthResponse } from "./auth-response.interface";
import { StorageBase } from '../core/utils/storage.base';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {

  private url =' http://localhost:3000/';

  public accessToken = '';


constructor(protected http: HttpClient, private storage:StorageBase) {
  this.accessToken = storage.getToken();
}

  public postRegister$(register: Register) {
    return this.http
      .post<AuthResponse>(this.url + 'register', register)
      .pipe(tap((response) => {
        this.accessToken = response.accessToken
        // Aqui es realmente donde se setea el token.
        this.storage.setToken(this.accessToken);
      }));
  }

  public postLogin$(login: Login) {
    return this.http
      .post<AuthResponse>(this.url + 'login', login).pipe(
        tap((response) => { // Porque lleva mas de una instruccion
          this.accessToken = response.accessToken;
          // Aqui es realmente donde se setea el token.
          this.storage.setToken(this.accessToken);
        }));
  }
}

