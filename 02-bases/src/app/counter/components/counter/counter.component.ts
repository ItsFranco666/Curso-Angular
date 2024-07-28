// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola counter</h1>'

// })
// export class CounterComponent {}

// snippets a-
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{ counter }}</h3>
    <button (click)="incrementBy(+1)">+1</button>
    <button (click)="incrementBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent {
  public counter: number;

  constructor() {
    this.counter = 0;
  }

  incrementBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 0;
  }
}
