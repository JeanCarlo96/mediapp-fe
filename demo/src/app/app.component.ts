import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompbComponent } from "./compb/compb.component";
import { CompaComponent } from './compa/compa.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompaComponent, CompbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
