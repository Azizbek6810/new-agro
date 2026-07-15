import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-public-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {

}
