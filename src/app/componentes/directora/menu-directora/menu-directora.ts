import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 


@Component({
  selector: 'app-menu-directora',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './menu-directora.html',
  styleUrls: ['./menu-directora.css']
})
export class MenuDirectoraComponent {

}
