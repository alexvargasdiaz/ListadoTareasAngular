import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  newTask: string = '';
  @Output() onTaskAdd = new EventEmitter<Task>();

  addTask() {
    if (this.newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        title: this.newTask,
        completed: false
      };
      this.onTaskAdd.emit(task);
      this.newTask = '';
    }
  }
}
