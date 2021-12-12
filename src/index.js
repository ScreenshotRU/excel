import { Router } from '@core/routes/Router';
import { DashboardPage } from '@/pages/DashboardPage';
import { ExcelPage } from '@/pages/ExcelPage';
import './scss/index.scss';

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage,
});

let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
