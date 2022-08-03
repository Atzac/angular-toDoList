import { TaskList } from "./../../model/task-list";
import { Component, DoCheck } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public deleteItem(idx: number) {
    this.taskList.splice(idx, 1);
  }

  public deleteAll() {
    const confirm = window.confirm("Deseja remover tudo?");
    if (confirm) this.taskList = [];
  }

  public setEmmitedTaskItem(taskEmmited: string) {
    this.taskList.push({ taskName: taskEmmited, checked: false });
  }

  public validation(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task vazia, deseja remover?");
      if (confirm) this.deleteItem(index);
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
