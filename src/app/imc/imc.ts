import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './imc.html',
  styleUrls: ['./imc.css']
})
export class ImcComponent {
  peso = 0;
  altura = 0;
  resultado = '';

  calcular() {
    const imc = this.peso / (this.altura * this.altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 35) classificacao = 'Obesidade grau I';
    else if (imc < 40) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    this.resultado = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
  }
}
