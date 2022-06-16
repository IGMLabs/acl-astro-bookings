import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/core/api/login.interface';
import { AuthApi } from '../auth.api';

@Component({
  // selector: 'app-login-page', Se borra porque no se llega a usar
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  constructor(private aa: AuthApi) { }

  ngOnInit(): void {
  }

  onSave(newLogin: Login){
    this.aa.postLogin$(newLogin).subscribe();
  }
}
