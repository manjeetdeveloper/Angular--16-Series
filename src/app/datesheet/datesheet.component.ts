import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datesheet',
  templateUrl: './datesheet.component.html',
  styleUrl: './datesheet.component.css'
})
export class DatesheetComponent {
  datesheet = [

    { 'course': 'Cap917', 'date': '12 Nov' },
    { 'course': 'Cap917', 'date': '12 Nov' },
    { 'course': 'Cap918', 'date': '18 Dec' },
    { 'course': 'Cap919', 'date': '15 Jan' },
  ];
  constructor() { }
  ngOnInit() { }
}



