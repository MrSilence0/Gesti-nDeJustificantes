import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
// Importar módulos necesarios
import { NgbDropdownModule, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; 
import { CommonModule } from '@angular/common'; 

interface Justificante {
    no: string;
    estado: string;
}

@Component({
  selector: 'app-ver-solicitudes',
  standalone: true,
  // Asegurar que los imports de ng-bootstrap estén aquí
  imports: [RouterLink, NgbDropdownModule, NgbModalModule, CommonModule],
  templateUrl: './ver-solicitudes.html',
  styleUrls: ['./ver-solicitudes.css']
})
export class VerSolicitudesComponent {
    // Referencia al ng-template del modal
    @ViewChild('content') modalContent!: TemplateRef<any>;

    // Objeto para bindear los datos del justificante en el modal
    selectedJustificante: Justificante = { no: '', estado: '' };

    // Inyectar NgbModal para manejar la apertura del modal
    constructor(private modalService: NgbModal) {}

    /**
     * Abre el modal de detalle con la información del justificante.
     * @param justificanteNo El número de identificador del justificante.
     * @param estado El estado actual de la solicitud.
     */
    openModal(justificanteNo: string, estado: string): void {
        this.selectedJustificante = { no: justificanteNo, estado: estado };
        
        // Abrir el modal usando la referencia de ViewChild
        this.modalService.open(this.modalContent, { centered: true, ariaLabelledBy: 'modal-basic-title' })
            .result.then(
                (result) => {
                    console.log(`Modal cerrado: ${result}`);
                }, 
                (reason) => {
                    console.log(`Modal descartado: ${reason}`);
                }
            );
    }
}