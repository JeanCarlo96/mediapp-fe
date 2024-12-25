import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  @Input()
  message: string = 'TITLE FROM CALCULATOR';
  number1: number = 0;
  number2: number = 0;
  sum: number = 0;
  @Output()
  emitter: EventEmitter<number> = new EventEmitter<number>();

  /*
  getNumber1(e: any){
    this.number1 = +e.target.value;
  }

  getNumber2(e: any){
    this.number2 = +e.target.value;
  }
*/

  operate(){
    this.sum = this.number1 + this.number2;
    this.emitter.emit(this.sum);
  }

}
