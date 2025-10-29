import { Component, OnInit } from '@angular/core'; 
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio-sesion.html',
  styleUrls: ['./inicio-sesion.css'],
})
export class InicioSesionComponent implements OnInit {

  phrases = [
    '<div class="phrase-main"><span class="phrase-aguilas">¡ORGULLOSAMENTE ÁGUILAS</span> <span class="phrase-utng">ORGULLOSAMENTE UTNG!</span></div>',
    '<div class="phrase-title purple-text">Respeto</div><div class="phrase-body">Tratamos a las personas con dignidad y apreciamos sus opiniones.</div>',
    '<div class="phrase-title green-text">Comunicación</div><div class="phrase-body">No damos nada por obvio. No suponemos.</div>',
    '<div class="phrase-title purple-text">Trabajo en equipo</div><div class="phrase-body">El éxito de la UTNG lo construimos juntos.</div>',
    '<div class="phrase-title orange-text">Transparencia</div><div class="phrase-body">Brindamos acceso a toda la información pública que se genere o posea la universidad.</div>',
    '<div class="phrase-title blue-text">Paz</div><div class="phrase-body">Respetamos las opiniones de los demás.</div>',
    '<div class="phrase-title yellow-text">Honestidad</div><div class="phrase-body">Respetamos la verdad.</div>',
    '<div class="phrase-title red-text">Responsabilidad</div><div class="phrase-body">Reconocemos nuestros errores al tiempo que buscamos corregirlos.</div>',
    '<div class="phrase-title pink-text">Rendición de Cuentas</div><div class="phrase-body">Informamos sobre el buen uso de los recursos asignados.</div>',
  ];

  currentPhraseIndex = 0;

  ngOnInit(): void {
    this.updateDynamicText(); // Muestra la primera frase inmediatamente
    setInterval(() => this.updateDynamicText(), 5000); // Cambia cada 5 segundos
  }

  updateDynamicText(): void {
    const dynamicTextContainer = document.getElementById('dynamicText');
    
    if (dynamicTextContainer) {
      // Aplicar transición de salida
      dynamicTextContainer.style.opacity = '0';

      setTimeout(() => {
        // Cambiar el contenido
        dynamicTextContainer.innerHTML = this.phrases[this.currentPhraseIndex];
        
        // Aplicar transición de entrada
        dynamicTextContainer.style.opacity = '1';
        
        // Mover al siguiente índice
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      }, 500);
    }
  }
}