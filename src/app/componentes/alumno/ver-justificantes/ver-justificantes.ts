import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-ver-justificantes',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './ver-justificantes.html',
  styleUrls: ['./ver-justificantes.css']
})
export class VerJustificantesComponent {

}