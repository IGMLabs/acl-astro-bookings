import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/core/api/register.interface';
import { AuthApi } from '../auth.api';

@Component({
  // selector: 'app-register', Se borra porque no se llega a usar
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {


  constructor(private aa: AuthApi) { }

  ngOnInit(): void {
  }

  onSave(newRegister: Register){
    this.aa.postRegister$(newRegister).subscribe();
  }
}
