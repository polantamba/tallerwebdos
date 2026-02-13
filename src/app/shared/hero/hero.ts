import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html'
})
export class Hero {
  @Input() titulo!: string;
  @Input() titulo2!: string;
  @Input() descripcion!: string;
  @Input() imagen!: string;
  @Input() imagen1!: string;
  @Input() imagen2!: string;
  @Input() imagen3!: string;
  @Input() item1!: string;
  @Input() parrafo1!: string;
  @Input() item2!: string;
  @Input() parrafo2!: string;
  @Input() item3!: string;
  @Input() parrafo3!: string;
  @Input() precio1!: string;
  @Input() boton1!: string;
  @Input() precio2!: string;
  @Input() boton2!: string;
  @Input() precio3!: string;
  @Input() boton3!: string;
}