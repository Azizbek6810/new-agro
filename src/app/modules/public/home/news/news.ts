import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-news',
  imports: [TranslatePipe, NzButtonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {

}
