import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
  mltclasses = {
    class1:true,
    class2: true,
    class3:true
  }

  mltstyle = {
    'background': 'yellow',
    'border': ' 10px solid blue'
  }

}
