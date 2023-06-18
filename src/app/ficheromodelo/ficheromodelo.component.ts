
export class Disenos{

  public referencia:string;
  public foto:string;
  public precio:number;
  public color:string;
  public texto:string;
  public temporada:string;

  constructor(referencia:string, foto:string, precio:number, color:string, texto:string, temporada:string) { 
    this.referencia=referencia;
    this.foto=foto;
    this.precio=precio;
    this.color=color;
    this.texto=texto;
    this.temporada=temporada;
  }

  getFoto(){
    return this.foto;
  }
}



 

