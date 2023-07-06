type IngredientProps = {
  name: string;
  amount: number;
};

export class Ingredient {
  public name = '';
  public amount = 0;

  constructor(public props: IngredientProps) {
    this.name = props.name;
    this.amount = props.amount;
  }
}
