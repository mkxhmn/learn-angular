type RecipeProps = {
  name: string;
  description: string;
  imagePath: string;
};

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(props: RecipeProps) {
    this.name = props.name;
    this.description = props.description;
    this.imagePath = props.imagePath;
  }
}
