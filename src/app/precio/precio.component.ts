import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../servicios/datos.service';
@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.css']
})
export class PrecioComponent implements OnInit {
  ref=this.camino.snapshot.params[ 'ref' ]; 
  numero=0;
  disenos:any;
  constructor(public datosService:DatosService, private  camino : ActivatedRoute) { }

  ngOnInit(): void {
    this.disenos = this.datosService.getDisenos();
  }
  ModifyPrice(num:string){
    this.numero=Number(num);
    this.datosService.setPrecio(this.numero, this.ref);
  }

}
