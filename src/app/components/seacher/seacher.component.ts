import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-seacher',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './seacher.component.html',
  styleUrl: './seacher.component.css'
})
export class SeacherComponent {

}
