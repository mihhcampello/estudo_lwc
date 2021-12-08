import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {

    factors = [0,2,3,4,5,6];
    
    handleAdd() {
      console.log('D');
        this.dispatchEvent(new CustomEvent('add'));
      }
    handleSubtract() {
      console.log('E');
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    handleMultiply(event) {
      console.log('F');
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
          detail: factor
        }));
    }
}