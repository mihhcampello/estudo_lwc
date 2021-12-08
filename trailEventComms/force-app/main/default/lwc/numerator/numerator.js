import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {

    //@api counter = 0;
    _currentCount = 0;
    priorCount = 0;
    @api
    get counter() {
      console.log('J');
      return this._currentCount;
    }
    set counter(value) {
      console.log('L');
      this.priorCount = this._currentCount;
      this._currentCount = value;
    }
    @api
    maximizeCounter() {
      console.log('M');
      this.counter += 1000000;
    }
    
    counter = 0;
    handleIncrement() {
      console.log('N');
        this.counter++;
    }
    handleDecrement() {
      console.log('O');
        this.counter--;
    }
    handleMultiply(event) {
      console.log('P');
        const factor = event.detail;
        this.counter *= factor;
    }
}