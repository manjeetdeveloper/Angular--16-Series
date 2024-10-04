import { Component } from '@angular/core';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrl: './seating.component.css'
})
export class SeatingComponent {

  seating = [

    {'Name':  'Manjeet', 'course': 'Cap917', 'Seating': '38-913' },
    { 'Name':  'Subhash','course': 'Cap915', 'Seating': '27-405' },
    { 'Name':  'Mohit','course': 'Cap918', 'Seating': '28-411' },
    {'Name':  'Miraj','course': 'Cap919', 'Seating': '34-702' },
  ];
  constructor() { }
  ngOnInit() { }

}
