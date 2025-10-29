import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-menu-asistente',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './menu-asistente.html',
  styleUrls: ['./menu-asistente.css']
})
export class MenuAsistenteComponent {

}
