import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  disenos:any;
  constructor(public datosService:DatosService) { }

  ngOnInit(): void {
    this.disenos = this.datosService.getDisenos();
  }

}
