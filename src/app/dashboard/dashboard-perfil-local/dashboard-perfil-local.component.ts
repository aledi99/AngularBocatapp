import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from 'src/app/establecimientoservice/establecimiento.service';
import { EstablecimientoDto2 } from 'src/app/establecimientomodel/establecimientodto';
import { EditarEstablecimientoDialogComponent } from 'src/app/editar-establecimiento-dialog/editar-establecimiento-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard-perfil-local',
  templateUrl: './dashboard-perfil-local.component.html',
  styleUrls: ['./dashboard-perfil-local.component.scss']
})
export class DashboardPerfilLocalComponent implements OnInit {
  establecimiento : EstablecimientoDto2;
  errorMess = null;

  constructor(private establecimientoService : EstablecimientoService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.loadMyLocal();
  }

  loadMyLocal() {
    console.log("entra");
    this.establecimientoService.getMyLocal().subscribe(resp => {
      this.establecimiento = resp;
      console.log(resp);
      this.errorMess=null;
    }, error => {
      
      this.errorMess = error.error.message;
    });
  }

  getImage(filename : String) {
    var retrieveResonse = null;
    var base64data = null;
    var retrievedImage = null;

    this.establecimientoService.getImageLocal(filename).subscribe(resp => {
      retrieveResonse = resp;
      base64data = retrieveResonse.picByte;
      retrievedImage = 'data:image/png;base64,' + base64data;
    }).unsubscribe();

    return retrievedImage;

  }

  openDialog(id : number): void {
    const dialogRef = this.dialog.open(EditarEstablecimientoDialogComponent, {
      data: { id2: id},
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

}
