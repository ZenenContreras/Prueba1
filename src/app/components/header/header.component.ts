import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <nav>
        <a routerLink="/" class="logo">
          <img src="/assets/logo.png" alt="" />
          ArriendaTuFinca
        </a>
        <ul>
          <li><a routerLink="/requests">Mis Solicitudes</a></li>
          <li><a routerLink="/profile">Perfil</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .logo {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary-color);
      text-decoration: none;
    }
    .logo img {
      height: 40px;
      margin-right: 0.5rem;
    }
    ul {
      display: flex;
      list-style: none;
      gap: 1rem;
    }
    a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
      transition: color 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    a:hover {
      color: var(--primary-color);
      background-color: #f1f1f1);
    }
  `]
})
export class HeaderComponent {}