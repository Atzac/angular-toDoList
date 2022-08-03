import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-add-items",
  templateUrl: "./input-add-items.component.html",
  styleUrls: ["./input-add-items.component.scss"],
})
export class InputAddItemsComponent implements OnInit {
  @Output() public emmitItem = new EventEmitter();
  public addItem: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItem() {
    this.addItem = this.addItem.trim(); //remove espaços
    if (this.addItem) {
      this.emmitItem.emit(this.addItem);
      this.addItem = '';
    }
  }
}
