import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: string[] = ['ironman', 'hulk', 'thor'];
  public deletedHero?: string;

  public deleteHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
