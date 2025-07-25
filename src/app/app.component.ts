import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda Online';
}
