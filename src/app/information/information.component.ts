import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  disenos:any;
  ref=this.camino.snapshot.params[ 'ref' ]; 
  
  constructor(public datosService:DatosService,private router:Router, private  camino : ActivatedRoute, private _location: Location) { }
  ngOnInit(): void {
    this.disenos = this.datosService.getDisenos();
  }
  showPrice(ref:number){
    this.router.navigate(["precio", ref]);
  }
  goBack(){
    this._location.back();
  }

}
