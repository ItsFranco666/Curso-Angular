import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get CapitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `El héroe ${this.name} tiene ${this.age} años`;
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
