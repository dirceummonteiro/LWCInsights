import { updateRecord } from 'lightning/uiRecordApi';
    

@api recordId;

updateRecord({ fields: { Id: this.recordId } });
