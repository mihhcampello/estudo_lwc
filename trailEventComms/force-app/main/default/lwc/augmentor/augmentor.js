import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {

    startCounter = 0;
    handleStartChange(event) {
      console.log('A');
      this.startCounter = parseInt(event.target.value);
    }
    handleMaximizeCounter() {
      console.log('B');
        this.template.querySelector('c-numerator').maximizeCounter();
      }
}