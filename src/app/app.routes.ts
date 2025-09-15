import { Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media';
import { ApoliceComponent } from './apolice/apolice';
import { ConversorTempComponent } from './conversor-temp/conversor-temp';
import { ImcComponent } from './imc/imc';


export const routes: Routes = [
    { path: 'calcular-media', component: CalcularMediaComponent },
    { path: 'apolice', component: ApoliceComponent },
    { path: 'conversor-temp', component: ConversorTempComponent },
    { path: 'imc', component: ImcComponent },
];
