// imports
import {LightningElement, api} from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import BOAT_MESSAGE_CHANNEL from '@salesforce/messageChannel/Boat_Message_Channel__c';
const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';

export default class BoatTile extends LightningElement {
    @api boat;
    @api selectedBoatId;
    
    get backgroundStyle() {
        return `background-image:url(${this.boat.Picture__c})`;
     }    
    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    get tileClass() {
        this.selectedBoatId == this.boat.Id ? TILE_WRAPPER_SELECTED_CLASS : TILE_WRAPPER_UNSELECTED_CLASS; 
    }    
    // Fires event with the Id of the boat that has been selected.
    selectBoat() {
        let boatId = this.boat.Id;
        const boatselectEvent = new CustomEvent('boatselect',{ detail: boatId }); 
        this.dispatchEvent(boatselectEvent);
    }
}
