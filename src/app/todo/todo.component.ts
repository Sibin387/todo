import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title="Todo Listing";
  todos:any=[];
  count =0;

  user={};

  constructor(private router: Router,
    private todoService:TodoService,
    private commonService:CommonService,) { 
      this.user = commonService.getItem('user');
  }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(){
    this.todoService.get()
    .subscribe(data=>{
      this.todos=data;
    });
  }
  addTodo(){
    this.router.navigate(['add']);
  }
  edit(todo){
    this.router.navigate(['edit',todo._id]);
  }
  delete(todo){
    this.todoService.delete(todo._id)
    .subscribe(data=>{
      this.getTodos();
    });
  }
  onHeaderClick(event){
    this.count+=event;
  }
}
