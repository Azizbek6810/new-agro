import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-guide',
  imports: [CommonModule, NzButtonModule, NzIconModule, NzCarouselModule, RouterModule],
  templateUrl: './guide.html',
  styleUrl: './guide.css',
})
export class Guide {

}
