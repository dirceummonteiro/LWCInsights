
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningToastExample extends NavigationMixin( LightningElement ) {
	
	

	showToast(msg, title, type) {
		const event = new ShowToastEvent({
            title: title,
            message: msg,
            variant: type
        });
        this.dispatchEvent(event);

	}

}

