import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  result = [

    {'Name':  'Manjeet' ,'Subject': 'Math', 'Makrs': '89' },
    { 'Name': 'Vishal' ,'Subject': 'Science', 'Makrs': '77' },
    { 'Name': 'Keshav' ,'Subject': 'English', 'Makrs': '23' },
    { 'Name': 'Abhishek' ,'Subject': 'History', 'Makrs': '56' },
  ];
  constructor() { }
  ngOnInit() { }

}
