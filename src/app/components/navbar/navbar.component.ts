import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    document.querySelector('.menu')?.classList.add('active');
  }

  close(): void {
    document.querySelector('.menu')?.classList.remove('active');
  }
}
