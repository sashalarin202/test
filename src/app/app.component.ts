import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = [1,2,3,4,5,6] 
  change(element:number){
    return element + 2
  }
}
