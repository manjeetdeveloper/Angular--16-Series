import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  title = 'Template  Refreance Variables'

  getVal(item:any)
  {
    console.warn(item)
  }

}
