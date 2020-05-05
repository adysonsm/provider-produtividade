import { Component } from '@angular/core';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
})
export class ECommerceComponent {
  public step : number = 0;
  frag = false

  advanceStep(hideen?: true) {
    if (hideen) {
      this.frag = true
    }
    this.step++
  }

  backStep() {
    this.step--
  }
}
