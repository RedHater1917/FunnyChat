import { Component, OnInit } from '@angular/core';
import { userService } from '../services/userService';

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.css']
})
export class LkComponent implements OnInit {

  constructor(private userService:userService) { }

  ngOnInit(): void {
  }

}
