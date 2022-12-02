import { Component } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent {
  oddNumber: number;
  removeTime = '';
  remove(min, max) {
    let randomOddNumber = Math.floor(Math.random() * (min - max + 1));
    let removeTime = setInterval(() => randomOddNumber, 1000);
  }
}
