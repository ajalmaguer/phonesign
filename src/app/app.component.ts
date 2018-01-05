import { Component } from '@angular/core';

@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps';
  fontSize = 300;

  fontUp() {
    this.fontSize += 50;
    console.log('this.fontSize =', this.fontSize);
  }

  fontDown() {
    if (this.fontSize >= 100) {
      this.fontSize -= 50;
    }
    console.log('this.fontSize =', this.fontSize);
  }

}
