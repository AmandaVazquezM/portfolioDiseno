import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  disenos:any;
  constructor(private router:Router, public datosService:DatosService) { }

  ngOnInit(): void {
    this.disenos = this.datosService.getDisenos();
  }
showInformation(ref:string){
  this.router.navigate(["information", ref]);
}
}
