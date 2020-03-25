import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from 'src/app/establecimientoservice/establecimiento.service';
import { EstablecimientoDto2 } from 'src/app/establecimientomodel/establecimientodto';

@Component({
  selector: 'app-dashboard-establecimiento',
  templateUrl: './dashboard-establecimiento.component.html',
  styleUrls: ['./dashboard-establecimiento.component.scss']
})
export class DashboardEstablecimientoComponent implements OnInit {
  listaEstablecimientos : EstablecimientoDto2[];
  establecimiento : EstablecimientoDto2;
  errorMess = null;
  

  constructor(private establecimientoService : EstablecimientoService) { }

  ngOnInit() {
    this.loadLocals();
  }

  loadLocals() {
    console.log("entra");
    this.establecimientoService.getEstablecimientos().subscribe(resp => {
      this.listaEstablecimientos = resp;
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

    this.establecimientoService.getImage(filename).subscribe(resp => {
      retrieveResonse = resp;
      base64data = retrieveResonse.picByte;
      retrievedImage = 'data:image/png;base64,' + base64data;
    }).unsubscribe();

    return retrievedImage;

  }

}
