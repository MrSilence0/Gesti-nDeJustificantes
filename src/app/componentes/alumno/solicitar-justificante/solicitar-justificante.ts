import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-solicitar-justificante',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './solicitar-justificante.html',
  styleUrls: ['./solicitar-justificante.css']
})
export class SolicitarJustificanteComponent {

}