import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-temp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor-temp.html',
  styleUrls: ['./conversor-temp.css']
})
export class ConversorTempComponent {
  celsius = 0;
  fahrenheit = 0;
  kelvin = 0;

  converter() {
    this.fahrenheit = this.celsius * 9 / 5 + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
