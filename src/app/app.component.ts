import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SeacherComponent } from './components/seacher/seacher.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListComponent, SeacherComponent],
  template: `
    <main class="container">
      <h1>📋 Lista de Tareas</h1>
      <app-task-list></app-task-list>
      <app-seacher></app-seacher>
    </main>
  `,
  styles: [`
    .container {
      margin: 2rem auto;
      padding: 2rem;
      max-width: 600px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .full-width {
      width: 100%;
      margin-bottom: 1rem;
    }
  `]
})
export class AppComponent {}
