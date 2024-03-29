import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'; //busca dados e erros da obtenção de registros
// Set Bear object fields
const NAME_FIELD = 'Bear__c.Name';
const LOCATION_LATITUDE_FIELD = 'Bear__c.Location__Latitude__s';  //sem integridade referencial, ou seja, pode ter campos excluídos e assim perder a integridade
const LOCATION_LONGITUDE_FIELD = 'Bear__c.Location__Longitude__s';
const bearFields = [
    NAME_FIELD,
    LOCATION_LATITUDE_FIELD,
    LOCATION_LONGITUDE_FIELD
];
export default class BearLocation extends LightningElement {
    @api recordId;
    name;
    mapMarkers = [];
    @wire(getRecord, { recordId: '$recordId', fields: bearFields })
    loadBear({ error, data }) {
        console.log('F');
        if (error) {
        // TODO: handle error
        } else if (data) {
        // Get Bear data
        this.name =  getFieldValue(data, NAME_FIELD);
        const Latitude = getFieldValue(data, LOCATION_LATITUDE_FIELD);
        const Longitude = getFieldValue(data, LOCATION_LONGITUDE_FIELD);
        // Transform bear data into map markers
        this.mapMarkers = [{
            location: { Latitude, Longitude },
            title: this.name,
            description: `Coords: ${Latitude}, ${Longitude}`
        }];
        }
    }
    get cardTitle() {
        console.log('G');
        return (this.name) ? `${this.name}'s location` : 'Bear location';
    }
}