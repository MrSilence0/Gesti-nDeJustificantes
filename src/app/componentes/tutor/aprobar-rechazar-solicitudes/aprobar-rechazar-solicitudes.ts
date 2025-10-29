import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { StatusDisplayPipe } from "./status.display.pipe";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

interface Justificante {
    noJustificante: string;
    noControl: string;
    nombre: string;
    grupo: string;
    fechaSolicitud: string;
    fechaInasistencia: string;
    tutor: string;
    estadoTutor: 'APROBADO_TUTOR' | 'RECHAZADO_TUTOR' | 'PENDIENTE_TUTOR';
    estadoDir: 'APROBADO_DIR' | 'RECHAZADO_DIR' | 'PENDIENTE';
    documento: string; 
}

interface JustificanteForm {
    noJustificante: string;
    estatus: 'APROBADO_DIR' | 'RECHAZADO_DIR' | '';
    comentarioRechazo: string;
}

@Component({
    selector: 'app-aprobar-rechazar-solicitudes',
    standalone: true,
    imports: [RouterLink, CommonModule, FormsModule, StatusDisplayPipe, NgbDropdownModule], 
    templateUrl: './aprobar-rechazar-solicitudes.html',
    styleUrls: ['./aprobar-rechazar-solicitudes.css']
})
export class AprobarRechazarSolicitudesTutorComponent implements OnInit {
    

    userName: string = 'Director TI'; 

    justificantes: Justificante[] = [
        { noJustificante: 'JUS-0045', noControl: '18190001', nombre: 'Juan Pérez López', grupo: 'GTI0131', fechaSolicitud: '10/May/2024', fechaInasistencia: '15/May/2024', tutor: 'Prof. García', estadoTutor: 'APROBADO_TUTOR', estadoDir: 'PENDIENTE', documento: 'documento_juan_perez.pdf' },
        { noJustificante: 'JUS-0046', noControl: '18190002', nombre: 'María Salas Ruiz', grupo: 'GTI0132', fechaSolicitud: '11/May/2024', fechaInasistencia: '16/May/2024', tutor: 'Prof. López', estadoTutor: 'APROBADO_TUTOR', estadoDir: 'PENDIENTE', documento: 'documento_maria_salas.jpg' },
        { noJustificante: 'JUS-0047', noControl: '18190003', nombre: 'Carlos Mendieta R.', grupo: 'GTI0131', fechaSolicitud: '12/May/2024', fechaInasistencia: '17/May/2024', tutor: 'Prof. García', estadoTutor: 'APROBADO_TUTOR', estadoDir: 'APROBADO_DIR', documento: 'documento_carlos_m.pdf' }, // Este no debe mostrarse inicialmente
        { noJustificante: 'JUS-0048', noControl: '18190004', nombre: 'Ana Gómez F.', grupo: 'GTI0201', fechaSolicitud: '13/May/2024', fechaInasistencia: '18/May/2024', tutor: 'Prof. Ruiz', estadoTutor: 'PENDIENTE_TUTOR', estadoDir: 'PENDIENTE', documento: 'documento_ana_gomez.pdf' }, // Este no debe mostrarse inicialmente (Tutor PENDIENTE)
        { noJustificante: 'JUS-0049', noControl: '18190005', nombre: 'Roberto Torres P.', grupo: 'GTI0131', fechaSolicitud: '14/May/2024', fechaInasistencia: '19/May/2024', tutor: 'Prof. García', estadoTutor: 'APROBADO_TUTOR', estadoDir: 'PENDIENTE', documento: 'documento_roberto_t.pdf' },
    ];

    gruposDisponibles: string[] = [];
    grupoFiltro: string = 'ALL'; 
    justificantesFiltrados: Justificante[] = [];
    justificanteSeleccionado: Justificante | null = null;
    modalMessage: string = '';

    formData: JustificanteForm = {
        noJustificante: '',
        estatus: '',
        comentarioRechazo: ''
    };


    ngOnInit(): void {
        this.gruposDisponibles = this.getUniqueGroups(this.justificantes);
        this.filterJustificantes();
    }


    private getUniqueGroups(data: Justificante[]): string[] {
        const groups = data.map(j => j.grupo);
        return [...new Set(groups)].sort();
    }

  
    filterJustificantes(): void {
        this.justificantesFiltrados = this.justificantes.filter(justif => {
            const isApprovedByTutor = justif.estadoTutor === 'APROBADO_TUTOR';
            const isPendingDir = justif.estadoDir === 'PENDIENTE';
            const matchesGroup = this.grupoFiltro === 'ALL' || justif.grupo === this.grupoFiltro;

            return isApprovedByTutor && isPendingDir && matchesGroup;
        });
        
        this.clearFormAndSelection(); 
    }

    /**
     * @param justif El objeto Justificante seleccionado.
     */
    seleccionarJustificante(justif: Justificante): void {
        this.justificanteSeleccionado = justif;
        this.clearFormAndSelection(false); 
        this.formData.noJustificante = justif.noJustificante;
    }

    /**
     * Muestra/Oculta el campo de motivo de rechazo según el estatus.
     */
    onStatusChange(): void {
        if (this.formData.estatus !== 'RECHAZADO_DIR') {
            this.formData.comentarioRechazo = '';
        }
    }

    /**
     * Envía la actualización de estatus.
     * En un sistema real, esto llamaría a un servicio.
     */
    actualizarEstatus(): void {
        if (!this.validarFormulario()) {
            this.showStatusModal('Por favor, revisa los campos requeridos (No. Justificante, Estatus y/o Motivo de Rechazo) marcados en rojo.', false);
            return;
        }

        const justifNo = this.formData.noJustificante;
        const newStatus = this.formData.estatus;
        const motivoRechazo = this.formData.comentarioRechazo;
        let statusText = newStatus === 'APROBADO_DIR' ? 'APROBADO por Dirección' : 'RECHAZADO por Dirección';

        // 1. Simulación de actualización de la fuente de datos
        if (this.justificanteSeleccionado) {
            this.justificanteSeleccionado.estadoDir = newStatus === 'APROBADO_DIR' ? 'APROBADO_DIR' : 'RECHAZADO_DIR';
            
            // 2. Ocultar la fila procesada de la vista (actualizando el filtro)
            this.filterJustificantes(); 
            
            // 3. Mostrar Modal
            let message = `<p class="fs-5"><i class="bi bi-check-circle-fill text-success fs-3 me-2"></i> El Justificante <b>${justifNo}</b> ha sido actualizado a <b>${statusText}</b> con éxito.</p>`;
            if (newStatus === 'RECHAZADO_DIR') {
                message += `<p class="mb-0">Motivo: <i>${motivoRechazo}</i></p>`;
            }

            this.showStatusModal(message, true);
        } else {
            this.showStatusModal(`Error: No se encontró la fila seleccionada para el Justificante <b>${justifNo}</b>.`, false);
        }
    }
    
    /**
     * Limpia el formulario y la selección de fila.
     * @param clearSelection Si es true, también limpia la fila marcada en la tabla.
     */
    clearFormAndSelection(clearSelection: boolean = true): void {
        this.formData = {
            noJustificante: '',
            estatus: '',
            comentarioRechazo: ''
        };
        
        if (clearSelection) {
            this.justificanteSeleccionado = null;
        }
    }

    /**
     * Valida el formulario antes de enviar.
     */
    private validarFormulario(): boolean {
        let isValid = true;
        
        // No. Justificante (Debe estar seleccionado)
        if (!this.formData.noJustificante || this.formData.noJustificante.trim() === '') {
            isValid = false;
        }
        
        // Estatus (Debe estar seleccionado)
        if (!this.formData.estatus || this.formData.estatus.trim() === '') {
            isValid = false;
        }
        
        // Comentario de Rechazo (Obligatorio si se rechaza)
        if (this.formData.estatus === 'RECHAZADO_DIR' && (!this.formData.comentarioRechazo || this.formData.comentarioRechazo.trim() === '')) {
            isValid = false;
        }
        
        // La validación de clases (is-invalid) se maneja en el HTML a través de Property Binding.
        return isValid;
    }

    /**
     * Muestra el modal de estado.
     * @param message Mensaje HTML a mostrar en el cuerpo del modal.
     * @param isSuccess Indica si es un mensaje de éxito o error.
     */
    showStatusModal(message: string, isSuccess: boolean): void {
        const icon = isSuccess 
            ? '<i class="bi bi-check-circle-fill text-success fs-3 me-2"></i>'
            : '<i class="bi bi-x-circle-fill text-danger fs-3 me-2"></i>';
        
        this.modalMessage = `<p class="fs-5">${message}</p>`;

        // Usar la API de JavaScript de Bootstrap (requiere que el modal esté en el DOM)
        const modalElement = document.getElementById('statusModal');
        if (modalElement) {
            const statusModal = new (window as any).bootstrap.Modal(modalElement);
            statusModal.show();
        }
    }

    /**
     * Simulación de descarga de documento.
     * @param justif Objeto Justificante con el nombre del documento.
     */
    downloadDocumento(justif: Justificante): void {
        if (justif.documento) {
            alert(`Simulando descarga de: ${justif.documento}\n(En un sistema real, se abriría o descargaría el archivo)`);
        } else {
            alert('Error: Documento no encontrado.');
        }
    }

}