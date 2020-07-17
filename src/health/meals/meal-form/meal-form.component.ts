import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Meal } from "src/health/shared/services/meals.service";

@Component({
  selector: "app-meal-form",
  templateUrl: "./meal-form.component.html",
  styleUrls: ["./meal-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealFormComponent implements OnInit {
  @Output() create = new EventEmitter<Meal>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      ingredients: this.fb.array([]),
    });
  }

  get required() {
    return (
      this.form.get("name").hasError("required") &&
      this.form.get("name").touched
    );
  }
  ngOnInit(): void {}

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  get ingredients() {
    return this.form.get("ingredients") as FormArray;
  }

  addIngrediant() {
    this.ingredients.push(new FormControl(""));
  }

  removeingredients(index: number) {
    this.ingredients.removeAt(index);
  }
}
