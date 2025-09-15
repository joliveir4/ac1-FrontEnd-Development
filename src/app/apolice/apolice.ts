import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apolice.html',
  styleUrls: ['./apolice.css']
})
export class ApoliceComponent {
  nome = '';
  sexo: 'M' | 'F' = 'M';
  idade = 0;
  valor = 0;
  resultado = '';

  calcular() {
    let taxa = 0.08;
    if (this.sexo === 'M') {
      taxa = this.idade <= 25 ? 0.15 : 0.10;
    }
    const apolice = this.valor * taxa;
    this.resultado = `Valor da apólice: R$ ${apolice.toFixed(2)}`;
  }
}
