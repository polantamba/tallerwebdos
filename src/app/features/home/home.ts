import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Portafolio } from "../../shared/portafolio/portafolio";
import { Faq } from "../../shared/faq/faq";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Portafolio, Faq],
  templateUrl: './home.html'
})
export class Home {}