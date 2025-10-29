import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Interfaz para definir la estructura de un Tutor
interface Tutor {
    noEmpleado: string;
    nombre: string;
    estado: 'ACTIVO' | 'INACTIVO' | '';
    cuatrimestre: 'ENE-ABR' | 'MAY-AGO' | 'SEP-DIC' | '';
    grupo: string;
    email: string;
}

// Declaramos la variable global de Bootstrap
declare var bootstrap: any; 

@Component({
    selector: 'app-estatus-tutor',
    standalone: true,
    imports: [RouterLink, CommonModule, FormsModule, NgbDropdownModule], 
    templateUrl: './estatus-tutor.html',
    styleUrls: ['./estatus-tutor.css']
})
export class EstatusTutorComponent implements OnInit, AfterViewInit {
    
    // Propiedades de la barra de navegación
    userName: string = 'Directora Nombre'; 
    
    // Propiedades de la tabla y búsqueda
    tutores: Tutor[] = [];
    tutoresFiltrados: Tutor[] = [];
    searchTerm: string = '';

    // Propiedades del formulario
    tutorSeleccionado: Partial<Tutor> = {}; // El tutor en edición
    
    // Propiedades del Modal
    modalMessage: string = '';
    private statusModal: any;

    constructor(private elementRef: ElementRef) {
        // Inicializar el objeto de tutor seleccionado con valores vacíos
        this.tutorSeleccionado = this.getTutorVacio();
    }

    ngOnInit(): void {
        this.cargarTutores();
    }
    
    // Inicialización de Bootstrap (Dropdowns y Modal)
    ngAfterViewInit(): void {
        // 1. Inicializar Dropdowns (reutilizando la lógica anterior)
        const dropdownElements = this.elementRef.nativeElement.querySelectorAll('[data-bs-toggle="dropdown"]');
        dropdownElements.forEach((element: HTMLElement) => {
            if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
                new bootstrap.Dropdown(element);
            }
        });
        
        // 2. Inicializar Modal
        const modalElement = this.elementRef.nativeElement.querySelector('#statusModal');
        if (modalElement && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
            this.statusModal = new bootstrap.Modal(modalElement);
        }
    }

    // --- Funciones de Utilidad ---

    getTutorVacio(): Partial<Tutor> {
        return {
            noEmpleado: '',
            nombre: '',
            estado: '',
            cuatrimestre: '',
            grupo: '',
            email: ''
        };
    }
    
    /** Muestra el modal de Bootstrap con el mensaje */
    showStatusModal(message: string, isSuccess: boolean = true): void {
        const icon = isSuccess 
            ? '<i class="bi bi-check-circle-fill text-success fs-3 me-2"></i>'
            : '<i class="bi bi-x-circle-fill text-danger fs-3 me-2"></i>';
            
        this.modalMessage = `<p class="fs-5">${icon} ${message}</p>`;
        if (this.statusModal) {
            this.statusModal.show();
        } else {
             // Fallback en caso de que Bootstrap no se cargue correctamente
             alert(message);
        }
    }

    // --- Lógica de Datos y Eventos ---

    cargarTutores(): void {
        // Simulación: cargar datos de tutores (en un entorno real sería un servicio)
        this.tutores = [
            { noEmpleado: '1001', nombre: 'Prof. Alejandra García', estado: 'ACTIVO', cuatrimestre: 'ENE-ABR', grupo: 'GTI0131', email: 'a.garcia@utng.edu.mx' },
            { noEmpleado: '1002', nombre: 'Dr. Ricardo López', estado: 'INACTIVO', cuatrimestre: 'MAY-AGO', grupo: 'NONE', email: 'r.lopez@utng.edu.mx' },
            { noEmpleado: '1003', nombre: 'Mtra. Susana Ruiz', estado: 'ACTIVO', cuatrimestre: 'SEP-DIC', grupo: 'GTI0201', email: 's.ruiz@utng.edu.mx' },
            // ... más datos
        ] as Tutor[];
        
        this.tutoresFiltrados = [...this.tutores]; // Inicialmente, todos están visibles
    }

    filtrarTutores(): void {
        const term = this.searchTerm.toLowerCase().trim();
        if (!term) {
            this.tutoresFiltrados = [...this.tutores];
        } else {
            this.tutoresFiltrados = this.tutores.filter(tutor => 
                tutor.noEmpleado.toLowerCase().includes(term) || 
                tutor.nombre.toLowerCase().includes(term)
            );
        }
        this.limpiarFormulario();
    }
    
    seleccionarTutor(tutor: Tutor): void {
        // Clonar el objeto para no modificar el original directamente en la tabla
        this.tutorSeleccionado = { ...tutor }; 
    }

    limpiarFormulario(): void {
        this.tutorSeleccionado = this.getTutorVacio();
    }

    // --- Lógica de Formulario (Actualizar) ---
    actualizarEstatus(): void {
        // Validación básica
        if (!this.tutorSeleccionado.noEmpleado || !this.tutorSeleccionado.estado || !this.tutorSeleccionado.cuatrimestre || !this.tutorSeleccionado.grupo) {
            this.showStatusModal('Por favor, selecciona un profesor y completa todos los campos de estatus, cuatrimestre y grupo.', false);
            return;
        }

        // Simulación de envío al backend (servicio)
        // 1. Encuentra el tutor original en la lista y actualízalo
        const index = this.tutores.findIndex(t => t.noEmpleado === this.tutorSeleccionado.noEmpleado);

        if (index !== -1) {
            // Actualizar la lista principal con los nuevos datos
            this.tutores[index].estado = this.tutorSeleccionado.estado as 'ACTIVO' | 'INACTIVO';
            this.tutores[index].cuatrimestre = this.tutorSeleccionado.cuatrimestre as 'ENE-ABR' | 'MAY-AGO' | 'SEP-DIC';
            this.tutores[index].grupo = this.tutorSeleccionado.grupo as string;
            
            // Forzar la actualización de la lista filtrada (necesario si la tabla ya estaba filtrada)
            this.filtrarTutores();

            this.showStatusModal(`El estatus del profesor **${this.tutorSeleccionado.nombre}** (No. ${this.tutorSeleccionado.noEmpleado}) ha sido actualizado con éxito.`, true);
        } else {
            this.showStatusModal(`Error: No se encontró el profesor ${this.tutorSeleccionado.noEmpleado}.`, false);
        }

        this.limpiarFormulario();
    }

    enviarCorreo(): void {
        if (this.tutorSeleccionado.noEmpleado) {
            const tutor = this.tutores.find(t => t.noEmpleado === this.tutorSeleccionado.noEmpleado);
            const email = tutor ? tutor.email : 'N/A';
            this.showStatusModal(`Simulando envío de correo a **${this.tutorSeleccionado.nombre}** (${email}).<br>Notificación de asignación/cambio de estatus enviada.`, true);
            this.limpiarFormulario();
        } else {
            this.showStatusModal('Error: Selecciona un profesor para enviar el correo.', false);
        }
    }

    // --- Métodos de visualización para la tabla ---
    getCuatrimestreDisplay(value: string): string {
        switch(value) {
            case 'ENE-ABR': return 'Enero-Abril';
            case 'MAY-AGO': return 'Mayo-Agosto';
            case 'SEP-DIC': return 'Septiembre-Diciembre';
            default: return value;
        }
    }
    
    getEstadoDisplay(value: string): string {
        return value === 'ACTIVO' ? 'Activo' : 'Inactivo';
    }
}