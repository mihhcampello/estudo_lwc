import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class BoatSearch extends NavigationMixin(LightningElement) {

    isLoading = false;

    handleLoading() {
        this.isLoading = true;
    }
    handleDoneLoading(){
        this.isLoading = false;
    }
    searchBoats(event) { 
        const boatSearchResult = this.template.querySelector('c-boat-search-results');
        boatSearchResult.searchBoats(event.detail); //parametro é o id do tipo de barco
    }  
    createNewBoat() {
        this[NavigationMixin.GenerateUrl]({
            type: "standard__recordPage",
            attributes: {
                objectApiName: 'Boat__c',
                actionName: 'new'
            }
        }).then(url => {
            window.open(url, "_blank");
        });
     }
}