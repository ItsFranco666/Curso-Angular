import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [CommonModule],  // Importar CommonModule para usar componentes comum como ngIf, ngFor, etc.
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent]
})
export class HeroesModule {}
