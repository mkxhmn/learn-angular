import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}

  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit() {}

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInput?.nativeElement?.value,
      Number(this.amountInput?.nativeElement?.value)
    );

    this.ingredientAdded.emit(newIngredient);
  }
}
