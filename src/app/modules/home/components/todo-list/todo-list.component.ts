import { TaskList } from "./../../model/task-list";
import { Component, DoCheck } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [
    { taskName: "teste 1", checked: false },
    { taskName: "teste 1", checked: false },
    { taskName: "teste 1", checked: false },
    { taskName: "teste 1", checked: false },
  ];

  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
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
}
