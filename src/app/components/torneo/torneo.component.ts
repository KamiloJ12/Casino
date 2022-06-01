import { Component, OnInit } from '@angular/core';
import { videojuegos } from './videojuegos';
@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {

  public videojuegos: Array<any> = videojuegos; 

  constructor() { }

  ngOnInit(): void {
  }

}
