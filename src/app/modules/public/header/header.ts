import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [NzButtonModule, NzSelectModule, NzIconModule, FormsModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
