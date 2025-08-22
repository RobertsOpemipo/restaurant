import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  template: `
  <app-header />
    <router-outlet />
  <app-footer />
  `,
})
export class App {
  protected title = 'restaurant';
}
