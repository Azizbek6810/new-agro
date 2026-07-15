import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private translate = inject(TranslateService)

  protected readonly title = signal('new-agro');

  constructor(){
    this.translate.addLangs(['uz', 'ru', 'en'])
  }
}
