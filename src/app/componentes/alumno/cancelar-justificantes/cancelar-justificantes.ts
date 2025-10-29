import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// 🚨 Importar el módulo para habilitar los dropdowns de ng-bootstrap
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-cancelar-justificantes',
  standalone: true,
  // 🚨 Añadir NgbDropdownModule a imports
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './cancelar-justificantes.html',
  styleUrls: ['./cancelar-justificantes.css']
})
export class CancelarJustificantesComponent {

}