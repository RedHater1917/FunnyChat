import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { userService } from '../services/userService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]
  constructor(private userService:userService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(all=>{
      this.users = all;
    })
  }

}
