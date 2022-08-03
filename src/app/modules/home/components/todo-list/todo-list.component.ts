import { TaskList } from "./../../model/task-list";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { taskName: "teste 1", checked: false },
    { taskName: "teste 1", checked: false },
    { taskName: "teste 1", checked: false },
    { taskName: "teste 1", checked: false },
  ];

  constructor() {}

  ngOnInit(): void {}

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
