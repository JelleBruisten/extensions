import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDivider } from '@angular/material/divider';
import { MtxCheckboxGroup } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxCheckboxGroup, FormsModule, MatDivider, JsonPipe],
})
export class AppComponent {
  foods = [
    { label: 'Steak', value: 'steak' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Tacos', value: 'tacos' },
  ];
  selectedFoods = [{ label: 'Pizza', value: 'pizza' }];
  compareWith(a: any, b: any) {
    return a.value === b.value;
  }

  cars = [
    { id: 1, name: 'Ford' },
    { id: 2, name: 'Chevrolet' },
    { id: 3, name: 'Dodge' },
  ];
  selectedCars = [
    { id: 2, name: 'Chevrolet' },
    { id: 3, name: 'Dodge' },
  ];
  compareWith2(a: any, b: any) {
    return a.id === b.id;
  }
}
