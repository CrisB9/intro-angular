import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/product/producto';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';


  showImage():void{
    this.muestraImg=!this.muestraImg;

  }

  constructor() { }

  ngOnInit(): void {
 
  }
  productos:IProducto[]=[
    
    {
    "productoId" :1,
    "Modelo": "Fiesta",
    "Descripcion":"Un carro bonito",
    "year": "2020",
    "Precio": 140000,
    "Marca": "Ford",
    "Color": "Gris",
    "ImagenURL": "https://http2.mlstatic.com/D_NQ_NP_670749-MLM51654557840_092022-W.jpg"
    },
    {
    "productoId" :2,
    "Modelo": "Sentra",
    "Descripcion":"Otra vez boonito",
    "year": "2021",
    "Precio": 180000,
    "Marca": "Nissan",
    "Color": "Azul",
    "ImagenURL": "https://memolira.com/wp-content/uploads/2020/07/Nissan-Sentra-2020-feat-e1594929586224.jpg"
    },
    {
    "productoId" :3,
    "Modelo": "Supra",
    "Descripcion":"Mas bonito ya compra :,(",
    "year": "2022",
    "Precio": 230000,
    "Marca": "Toyota",
    "Color": "Naranja",
    "ImagenURL": "https://www.tuningblog.eu/wp-content/uploads/2020/07/Fast-Furious-Paul-Walker-Toyota-Supra-MK4-Replika-Header.jpg"
    },
  ]
}
