import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>&copy; 2023 ArriendaTuFinca. Todos los derechos reservados.</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f7f7f7;
      padding: 1rem 2rem;
      text-align: center;
      color: #484848;
    }
  `]
})
export class FooterComponent {}