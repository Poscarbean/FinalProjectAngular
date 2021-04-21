import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Recetarium Santiosquiano | Home');

  }

}
