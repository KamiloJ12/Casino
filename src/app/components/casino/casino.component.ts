import { Component, OnInit } from '@angular/core';
import { videojuegos } from './videojuegos';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {

  public videojuegos: Array<any> = videojuegos; 

  constructor() { }

  ngOnInit(): void {
  }

}
