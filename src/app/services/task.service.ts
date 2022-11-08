import { Injectable } from '@angular/core';
import { Task } from 'src/assets/interfaces/interfaces';
import { TASKS } from 'src/app/mock-tasks';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private httpCall: HttpClient) { }

  getTask(): Observable<Task[]>{
    return this.httpCall.get<Task[]>(this.apiUrl);
  }
}
