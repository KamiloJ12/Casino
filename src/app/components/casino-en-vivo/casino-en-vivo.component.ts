import { Component, OnInit } from '@angular/core';
import { videojuegos } from './videojuegos';

@Component({
  selector: 'app-casino-en-vivo',
  templateUrl: './casino-en-vivo.component.html',
  styleUrls: ['./casino-en-vivo.component.css']
})
export class CasinoEnVivoComponent implements OnInit {

  public videojuegos: Array<any> = videojuegos; 

  constructor() { }

  ngOnInit(): void {
  }

}
