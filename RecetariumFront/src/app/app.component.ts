import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recetario de la abuela';

  constructor(private router: Router) {}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth', 'login'])
  }
}
