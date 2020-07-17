import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnInit {
  @Input() item: any;
  toggled = false;
  @Output() remove = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem(item)
  {
     this.remove.emit(item)
  }

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }
}
