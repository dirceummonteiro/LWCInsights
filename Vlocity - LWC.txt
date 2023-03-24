import { LightningElement, api, track } from "lwc";
import { fetchCustomLabels } from "vlocity_cmt/utility";
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";

const VIP_CLASS = 'vlocity_cmt.IntegrationProcedureService';
const VIP_BILLS_AGREEMENTS = 'VIP_Name';

const CUSTOM_LABELS = ['CustomLabelName', ['CustomLabelName']


 buildCustomLabels() {
        fetchCustomLabels(CUSTOM_LABELS).then(customLabelResponse => {
            this.labels = customLabelResponse
        });
    }


    buildParams() {
        const inputVip = {
            recordId:this.recordId,
        };
        return {
            input: JSON.stringify(inputVip),
            sClassName: VIP_CLASS,
            sMethodName: VIP_BILLS_AGREEMENTS,
            options: {}
        };
    }

