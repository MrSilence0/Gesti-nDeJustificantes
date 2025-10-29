import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// 🚨 Importar el módulo para habilitar los dropdowns de ng-bootstrap
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-actualizar-justificante',
  standalone: true,
  // 🚨 Añadir NgbDropdownModule a imports
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './actualizar-justificante.html',
  styleUrls: ['./actualizar-justificante.css']
})
export class ActualizarJustificanteComponent {

}
