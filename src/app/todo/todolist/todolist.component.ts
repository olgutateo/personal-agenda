import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../todo-interface';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  newToDo?: TodoInterface;
  allToDos: TodoInterface[] = [];
  idForToDo: number = 1;
  toDoDescription!: string;
  storage: string = '';

  errorMessage = '';
  constructor(private localStore: LocalStorageService) {}

  addToDo() {
    if (!this.toDoDescription) {
      this.errorMessage = "Todo can't be empty";
      return;
    }
    this.errorMessage = '';
    this.allToDos.push({
      id: this.idForToDo,
      description: this.toDoDescription,
      editing: false,
    });
    console.log(this.allToDos);
    this.localStore.saveData(
      (this.storage = JSON.stringify(this.allToDos)),
      JSON.stringify(this.allToDos[0])
    );
    console.log('ls' + this.localStore);
    this.toDoDescription = '';
    this.idForToDo++;

    // this.newToDo ;
  }
  // onInput(toDo: string) {
  //   if (toDo) {
  //     this.newToDo!.description = toDo;
  //     console.log(this.newToDo);
  //   }
  // }

  removeToDo(id: number) {
    this.allToDos = this.allToDos.filter((toDo) => toDo.id != id);
  }

  editTodo(toDo: TodoInterface) {
    toDo.editing = true;
  }

  doneEdit(toDo: TodoInterface) {
    toDo.editing = false;
  }

  ngOnInit(): void {
    this.toDoDescription = '';
    //   this.storage = JSON.parse(this.localStore.getData(this.storage))
  }
}
