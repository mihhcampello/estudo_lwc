import { LightningElement,api, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi'; //atualiza a si mesmo e a outros componentes
import getBoats from '@salesforce/apex/BoatDataService.getBoats';
import { publish, MessageContext } from 'lightning/messageService';
import BOAT_MESSAGE_CHANNEL from '@salesforce/messageChannel/Boat_Message_Channel__c';
// ...
const SUCCESS_TITLE = 'Success';
const MESSAGE_SHIP_IT     = 'Ship it!';
const SUCCESS_VARIANT     = 'success';
const ERROR_TITLE   = 'Error';
const ERROR_VARIANT = 'error';
export default class BoatSearchResults extends LightningElement {
    selectedBoatId;
    columns = [];
    boatTypeId = '';
    boats;
    isLoading = false;
        
    // wired message context
    messageContext;
    // wired getBoats method 
    wiredBoats(result) { }
    
    // public function that updates the existing boatTypeId property
    // uses notifyLoading
    
    @api //?????
    searchBoats(boatTypeId) //comunicação com boatSearch (searchBoats(event))
    {
        var boats = getBoats(boatTypeId)
        /* o retorno desta função para o cmp pai boatSearch deve ser através da
         resposta do apex data ou error para enviar o evento loading e deloading
         
        const loadinghEvent = new CustomEvent('loading'); 
        this.dispatchEvent(loadinghEvent);
        const doneLoadinghEvent = new CustomEvent('doneloading'); 
        this.dispatchEvent(doneLoadinghEvent);
         */
    }
    
    // this public function must refresh the boats asynchronously
    // uses notifyLoading
    refresh() { }
    
    // this function must update selectedBoatId and call sendMessageService
    updateSelectedTile() { }
    
    // Publishes the selected boat Id on the BoatMC.
    sendMessageService(boatId) { 
        // explicitly pass boatId to the parameter recordId
    }
    
    // The handleSave method must save the changes in the Boat Editor
    // passing the updated fields from draftValues to the 
    // Apex method updateBoatList(Object data).
    // Show a toast message with the title
    // clear lightning-datatable draft values
    handleSave(event) {
        // notify loading
        const updatedFields = event.detail.draftValues;
        // Update the records via Apex
        updateBoatList({data: updatedFields})
        .then(() => {})
        .catch(error => {})
        .finally(() => {});
    }
    // Check the current value of isLoading before dispatching the doneloading or loading custom event
    notifyLoading(isLoading) { }
}
