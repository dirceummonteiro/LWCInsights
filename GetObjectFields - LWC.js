import FIELDNAME from '@salesforce/schema/ObjectApiName__c.fieldApiName__c';
import { getFieldValue,getRecord } from 'lightning/uiRecordApi';

const FIELDS = [FIELDNAME];
    @wire(getRecord, { recordId: "$recordId", fields: FIELDS })
    fieldApiName__c;

    get fieldNamed(){
        return getFieldValue(this.fieldApiName__c.data, FIELDNAME); 
    }
