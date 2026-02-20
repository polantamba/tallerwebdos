import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Faq } from "../../shared/faq/faq";
import { Testimonios } from "../../shared/testimonios/testimonios";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule , Faq, Testimonios],
  templateUrl: './contacto.html'
})
export class Contacto {
  nombreFiltro: string = '';
}