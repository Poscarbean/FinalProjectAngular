import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = {
    nickname: "",
    password: ""
  }
  error = false;


  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.usuario).subscribe(
      ()=> this.router.navigate(['/recipes']),
      error => this.error = true
    );
  }
}
