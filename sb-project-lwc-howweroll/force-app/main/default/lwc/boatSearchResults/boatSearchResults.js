import { LightningElement,api, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi'; //atualiza a si mesmo e a outros componentes
import getBoats from '@salesforce/apex/BoatDataService.getBoats';
import { publish, MessageContext } from 'lightning/messageService';
import BOAT_MESSAGE_CHANNEL from '@salesforce/messageChannel/Boat_Message_Channel__c';
export default class BoatSearchResults extends LightningElement {

    @api
    searchBoats(boatTypeId){ //comunicação com boatSearch (searchBoats(event))
        var boats = getBoats(boatTypeId)
        /* o retorno desta função para o cmp pai boatSearch deve ser através da
         resposta do apex data ou error para enviar o evento loading e deloading
         
        const loadinghEvent = new CustomEvent('loading'); 
        this.dispatchEvent(loadinghEvent);
        const doneLoadinghEvent = new CustomEvent('doneloading'); 
        this.dispatchEvent(doneLoadinghEvent);
         */
        
    }
}