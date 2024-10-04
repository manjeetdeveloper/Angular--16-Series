import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {
  grades=[

    {  'Course' : 'CA917', "Date" : '5 Oct'  },
    {  'Course' : 'CA918',"Date" : '8 Jan'  },
    {  'Course' : 'CA977',"Date" : '9 Feb'  },
    {  'Course' : 'CA911',"Date" : '10 Nov'  },


  ];
  constructor(){}
  ngOnInit(){}

}
