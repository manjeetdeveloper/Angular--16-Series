import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})

export class NgforComponent {
  title = 'For Loop';
  users = ['Manjeet', 'Keshav', 'Abhishek', 'Vishal'];

  userDetails = [
    {name: 'Manjeet', email: 'manjeet@test.com', phone:'9908567756'},
    {name: 'Keshav', email: 'Keshav@test.com', phone:'990867756'},
    {name: 'Abhishek', email: 'Abhishek@test.com', phone:'89087756'},
    {name: 'Vishal', email: 'Vishal@test.com', phone:'569087756'},

  ];
}
