import { Component } from '@angular/core';
import { CabinetHeader } from "../cabinet-header/cabinet-header";
import { Sidebar } from "../sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { CabinetFooter } from "../cabinet-footer/cabinet-footer";

@Component({
  selector: 'app-cabinet-layout',
  imports: [CabinetHeader, Sidebar, RouterOutlet, CabinetFooter],
  templateUrl: './cabinet-layout.html',
  styleUrl: './cabinet-layout.css',
})
export class CabinetLayout {

}
