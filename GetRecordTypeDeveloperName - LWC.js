import { getRecord,getFieldValue } from 'lightning/uiRecordApi';

@wire(getRecord, { recordId: '$recordId', fields: ['vlocity_cmt__CustomerInteractionTopic__c.RecordType.DeveloperName'] })
    getTopicRecord({ data, error }) {
        if (data) {
            let recordTypeDetails = data.fields['RecordType']; //this line has record type Id and Name.
            this.RecordTypeName = recordTypeDetails.value.fields.DeveloperName.value;
            this.startFunction();
        }
    }


this.RecordTypeName;
