import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EstablecimientoService } from '../services/establecimiento.service';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.scss']
})
export class EstablecimientoComponent implements OnInit {

  colegios: Establecimiento[];
  columnsToDisplay = ['nombre','editar', 'eliminar'];

  constructor(
    private establecimientoService: EstablecimientoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getEstablecimientos();
  }

  getEstablecimientos(){
    this.establecimientoService.getListaEstablecimientos().subscribe(resp =>{
      this.establecimiento = resp;
    });
  }

  deleteEstablecimiento(establecimiento: Establecimiento){
    this.colegioService.deleteColegio(colegio.id).subscribe( resp => {
      alert("Establecimiento eliminado con éxito");
    });
  }

  openCrearColegioDialog(){
    const dialogRef = this.dialog.open(CrearEstablecimientoComponent);
    
    dialogRef.afterClosed().subscribe(resp => {
        this.establecimientoService.crearEstablecimiento(resp).subscribe(resF =>{
          alert("Se ha creado el establecimiento correctamente"); 
        });
            
    });
  }

}
