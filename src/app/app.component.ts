import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  @ViewChild('input') input:ElementRef;

  onClick(e) {
    this.input.nativeElement.value += e.target.innerText
  }

  calculate() {
    this.input.nativeElement.value=eval(this.input.nativeElement.value)
  }

  clear() {
    this.input.nativeElement.value='';
  }
}
