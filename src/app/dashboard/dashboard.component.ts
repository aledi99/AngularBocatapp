import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productoservice/producto.service';
import { ProductoResponse } from '../productomodel/producto';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listaProductos : ProductoResponse[];
  producto : ProductoResponse;
  errorMess = null;

  constructor(private productoService: ProductoService) {
    
  }

  ngOnInit() {
    this.loadMyProducts();
  }

  loadMyProducts() {
    console.log("entra");
    this.productoService.getMyProductos().subscribe(resp => {
      this.listaProductos = resp;
      console.log(resp);
      this.errorMess=null;
    }, error => {
      
      this.errorMess = error.error.message;
    });
  }
}
