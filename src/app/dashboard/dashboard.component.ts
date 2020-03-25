import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productoservice/producto.service';
import { ProductoResponse } from '../productomodel/producto';
import { MatDialog } from '@angular/material';
import { CrearProductoDialogComponent } from '../crear-producto-dialog/crear-producto-dialog.component';
import { ProductoDto2 } from '../productomodel/productofull';

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
  listaProductos : ProductoDto2[];
  producto : ProductoDto2;
  errorMess = null;
  

  constructor(private productoService: ProductoService, public dialog: MatDialog) {
    
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
  
  getImage(filename : String) {
    var url = null;
    this.productoService.getImage(filename).subscribe(resp => {
      url = resp;
    }).unsubscribe();

    return url;

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CrearProductoDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
