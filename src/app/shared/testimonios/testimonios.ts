import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.html'
})
export class Testimonios {
  
  currentIndex = signal(0);

  listaTestimonios = [
    {
      nombre: 'Elena Rodríguez',
      cargo: 'Directora de Marketing - TechCorp',
      frase: 'La ejecución fue impecable. El staff de Pol Events no solo gestionó el flujo de personas, sino que elevó la percepción de nuestra marca en el lanzamiento.',
      imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1500&auto=format&fit=crop'
    },
    {
      nombre: 'Carlos Méndez',
      cargo: 'Productor General - SoundWave Festival',
      frase: 'Gestionar la seguridad de 20,000 personas no es fácil, pero con la plataforma y el staff de Pol Events, todo se sintió bajo control absoluto.',
      imagen: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1500&auto=format&fit=crop'
    },
    {
      nombre: 'Sofía Valery',
      cargo: 'Wedding Planner Elite',
      frase: 'Cada detalle en la boda Platinum fue cuidado con una sofisticación asombrosa. Sus meseros y capitanes son de clase mundial.',
      imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1500&auto=format&fit=crop'
    }
  ];

  next() {
    this.currentIndex.update(index => (index + 1) % this.listaTestimonios.length);
  }

  prev() {
    this.currentIndex.update(index => (index - 1 + this.listaTestimonios.length) % this.listaTestimonios.length);
  }
}