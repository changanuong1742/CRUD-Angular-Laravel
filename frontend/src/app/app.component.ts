import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PT15312-WEB';
  gender: Number = 2;
  borderColor: string = 'black';
  money = 325620000;
  currentDate = new Date();

  inputValue: string = "";
  updateInputValue(event: any){
    this.inputValue = event.target.value;
    if(this.inputValue.length > 5) this.borderColor = 'black';
    else this.borderColor = 'red';
  }

  
}
