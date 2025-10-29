import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ver-justificantes-general',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './ver-justificantes-general.html',
  styleUrls: ['./ver-justificantes-general.css']
})
export class VerJustificantesGeneralComponent {

}
