import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: Usuario = {
    nickname: '',
    email: '',
    password: ''
  };

  constructor(
    private AuthService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  register() {
    this.AuthService.register(this.newUser).subscribe(
      ()=> this.router.navigate(['/auth', 'login']),
      error=> console.log(error)
    )
  }
}
